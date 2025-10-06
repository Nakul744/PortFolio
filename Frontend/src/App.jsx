import React from 'react';

import NavigationBar from './components/Navbar';
import Home from './sections/Home';
import TechSkill from './sections/TechSkill';
import Projects from './sections/Project';
import Contact from './sections/Contact';
import Footer from './components/Footer';
function app(){
  return (
    <>
    <NavigationBar/>
    <Home/>
    <TechSkill/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
    
  )
}

export default app;