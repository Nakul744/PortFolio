const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose =require('mongoose');

const app = express();
const port = process.env.port || 5000;


app.use(cors({

}));
app.use(express.json());

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connetion to Db succesfull");
    }catch(err){
        console.error(err.message)
    }
}

connectDB();
const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String, // '/travlo.png'
    demoLink: String,
    githubLink: String,
});

const Project = mongoose.model('Project', projectSchema, 'projects'); 



app.get('/api/projects', async (req, res) => {
    try {
        // Find all documents in the 'projects' collection
        const projects = await Project.find(); 
        
        // Respond with the JSON data
        res.status(200).json(projects);
    } catch (err) {
        console.error('Error fetching projects from DB:', err.message);
        // Respond with a 500 error if the database connection or query fails
        res.status(500).json({ message: 'Failed to retrieve projects from database.' });
    }
});



app.get('/', (req, res) => {
    res.status(200).send("API is running...")
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});