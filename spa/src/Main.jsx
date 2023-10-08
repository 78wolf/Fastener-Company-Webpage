import { useState } from "react";
import './Main.css'
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Privacy from "./Privacy";


function Main({page}) {
  
  return (
    <main id="main" className="main">
      
      {page === 'Home' && <Home />}
      {page === 'About' && <About />}
      {page === 'Service' && <Service />}
      {page === 'Contact' && <Contact />}
      {page === 'Privacy Policy' && <Privacy />}
      
    </main>
  );
}

export default Main;