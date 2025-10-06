const express = require('express');
const cors = require('cors');
require('dotenv').config();
const twilio = require('twilio');

const app = express();
const port = process.env.port || 5000;


const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

app.use(cors({

}));
app.use(express.json());




app.get('/', (req, res) => {
    res.status(200).send("API is running...")
});




// --- 3. Contact Form Submission Route (/api/contact) ---
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Create the SMS body text using the submitted form data
    const smsMessage = `NEW PORTFOLIO CONTACT!
    From: ${name} (${email})
    Message: ${message.substring(0, 150)}...`;

    try {
        // Send the SMS notification
        const twilioResponse = await twilioClient.messages.create({
            body: smsMessage,
            from: process.env.TWILIO_SMS_NUMBER,        // Twilio sender number from .env
            to: process.env.MY_PERSONAL_PHONE_NUMBER    // Your personal number from .env
        });

        console.log('SMS Sent Successfully. SID:', twilioResponse.sid);

        // Success response to the frontend
        res.status(200).json({
            message: 'Thank you for your message! An SMS notification has been sent.',
        });

    } catch (error) {
        console.error('Twilio SMS Error:', error.message);

        // Error response to the frontend
        res.status(500).json({
            message: 'Message received, but failed to send SMS notification. Check server logs.',
            error: error.message
        });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});