import React, { useState, useEffect } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Contactus from './components/Contactus'
import Content from './components/Content'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown';
import About from './components/About';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <BrowserRouter>
   <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
     
     
       
      < Hero/>
      <Content/>
      <About/>
      <Contactus/>
      
    </BrowserRouter>
  );
}

export default App;
