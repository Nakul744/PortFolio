// // portfolio-backend/seed.js

// const mongoose = require('mongoose');
// require('dotenv').config();

// // --- 1. Define the Data ---
// const SkillsData = [
//  {
//       name: "HTML5",
//       description: "Building structured and semantic web pages.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     },
//     {
//       name: "CSS3",
//       description: "Creating responsive and modern UI designs.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     },
//     {
//       name: "JavaScript",
//       description: "Adding interactivity and logic to web apps.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     },
//     {
//       name: "Java",
//       description: "Object-oriented programming and application development.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
//     },
//     {
//       name: "React.js",
//       description: "Building dynamic and reusable front-end components.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     },
//     {
//       name: "Bootstrap",
//       description: "Designing mobile-first responsive layouts.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//     },
//     {
//       name: "Tailwind CSS",
//       description: "Utility-first CSS framework for rapid UI development.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

//     },
//     {
//       name: "Node.js",
//       description: "Creating backend services and REST APIs.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     },
//     {
//       name: "Express.js",
//       description: "Building server-side applications and APIs.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//     },
//     {
//       name: "MySQL",
//       description: "Managing relational databases and data.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
//     },
//     {
//       name: "MongoDB",
//       description: "Working with NoSQL databases for data storage.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     },
//     {
//       name: "Git & GitHub",
//       description: "Version control and collaborative development.",
//       image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//     },
  
// ];

// // --- 2. Define Schema (Must match the one in server.js) ---
// const SkillsSchema = new mongoose.Schema({
//     name:String,
//     description:String,
//     image:String
// });
// const skills = mongoose.model('skills', SkillsSchema, 'skills');


// // --- 3. Seeder Function ---
// const importData = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('Database connection successful.');

//         // Clear existing data (optional, but prevents duplicates on rerun)
//         await skills.deleteMany(); 
        
//         // Insert the new data
//         await skills.insertMany(SkillsData);
        
//         console.log('✅ Data Imported Successfully!');
        
//         process.exit(); // Exit script successfully

//     } catch (error) {
//         console.error('❌ Data Import Failed!');
//         console.error(error);
//         process.exit(1); // Exit with error code
//     }
// };

// importData();