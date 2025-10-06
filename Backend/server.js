// portfolio-backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
// FIX 1: Use uppercase 'PORT' for consistency with deployment platforms (like Render)
// Also, correct the process.env check casing
const port = process.env.PORT || 5000;


const VERCEL_FRONTEND_URL = "https://port-folio-x4e1.vercel.app/"; 

// FIX: Explicitly set CORS to ONLY allow your Vercel domain to access the API
app.use(cors({
    origin: VERCEL_FRONTEND_URL,
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

// Simple route to check if the server is running
app.get('/', (req, res) => {
    res.status(200).send("Portfolio API is running and connected to MongoDB.");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});