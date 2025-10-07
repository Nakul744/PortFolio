// portfolio-backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
// FIX 1: Use uppercase 'PORT' for consistency with deployment platforms (like Render)
// Also, correct the process.env check casing
const port = process.env.PORT || 5000;


const allowedOrigins = [
    process.env.VERCEL_FRONTEND_URL,
    'http://localhost:5173', // Add your local dev URL
    // Add your deployed Render frontend URL if applicable (e.g., 'https://my-portfolio-frontend.onrender.com')
];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}));

app.use(express.json());

// --- Mongoose Connection and Model ---

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection to DB successful");
    } catch (err) {
        // FIX 3: Critical error handling: Crash the server if DB connection fails 
        // to prevent serving a broken API.
        console.error("Database Connection Error:", err.message);
        process.exit(1); 
    }
}

connectDB();

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    demoLink: String,
    githubLink: String,
});
const SkillsSchema = new mongoose.Schema({
    name:String,
    description:String,
    image:String
});

const skills = mongoose.model('skills', SkillsSchema, 'skills');

// The model name is 'Project', and it uses the 'projects' collection in Atlas.
const Project = mongoose.model('Project', projectSchema, 'projects'); 

// --- API Routes ---

// Route to fetch all projects from MongoDB Atlas
app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find(); 
        res.status(200).json(projects);
    } catch (err) {
        console.error('Error fetching projects from DB:', err.message);
        res.status(500).json({ message: 'Failed to retrieve projects from database.' });
    }
});

app.get("/api/skills", async (req, res) => {
    try {
        const skill = await skills.find();
        res.status(200).json(skill);
    } 
    catch (err) {
        console.error('Error fetching skills from Db:', err.message);
        // 🛠️ FIX: Send a 500 status response back to the client
        res.status(500).json({ message: 'Failed to retrieve skills from database.' });
    }
});

// Simple route to check if the server is running
app.get('/', (req, res) => {
    res.status(200).send("Portfolio API is running and connected to MongoDB.");
});



app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port} and bound to 0.0.0.0`);
});