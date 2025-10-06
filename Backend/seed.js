// // portfolio-backend/seed.js

// const mongoose = require('mongoose');
// require('dotenv').config();

// // --- 1. Define the Data ---
// const projectsData = [
//   {
//     title: "Travlo – Travel Planning Web App",
//     description: "A full-stack travel booking platform where users can explore listings, plan trips, and manage bookings. Built using Node.js, Express.js, MongoDB, and EJS with authentication and CRUD operations.",
//     image: "/travlo.png",
//     demoLink: "https://travlo-website-1.onrender.com",
//     githubLink: "https://github.com/Nakul744/Travlo-webSite.git"
//   },
//   {
//     title: "Zerodha Clone – Stock Trading Interface (Frontend)",
//     description: "A frontend clone of Zerodha’s trading dashboard built purely with React.js and styled with Bootstrap. The focus was on replicating the complex, dynamic user interface (UI) structure and interaction design for order management.",
//     image: "/Zerodha.png",
//     demoLink: "https://zerodha-frontend-rouge.vercel.app/",
//     githubLink: "https://github.com/Nakul744"
//   },
//   {
//     title: "Kite Dashboard – Full-Stack Trading Platform",
//     description: "A complete trading dashboard interface inspired by Zerodha Kite, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). Features include real-time data visualization via Chart.js, robust user authentication, and dynamic portfolio tracking.",
//     image: "/kite.png",
//     demoLink: "https://kite-dashboard.vercel.app/",
//     githubLink: "https://github.com/Nakul744"
//   }
// ];

// // --- 2. Define Schema (Must match the one in server.js) ---
// const projectSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     image: String,
//     demoLink: String,
//     githubLink: String,
// });
// const Project = mongoose.model('Project', projectSchema, 'projects');


// // --- 3. Seeder Function ---
// const importData = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('Database connection successful.');

//         // Clear existing data (optional, but prevents duplicates on rerun)
//         await Project.deleteMany(); 
        
//         // Insert the new data
//         await Project.insertMany(projectsData);
        
//         console.log('✅ Data Imported Successfully!');
        
//         process.exit(); // Exit script successfully

//     } catch (error) {
//         console.error('❌ Data Import Failed!');
//         console.error(error);
//         process.exit(1); // Exit with error code
//     }
// };

// importData();