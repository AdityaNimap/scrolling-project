import './App.css';
import React,{useRef, useState} from 'react';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar/Navbar';
import { useEffect } from 'react';


function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const galleryRef = useRef(null)
  const contactRef = useRef(null)
  const [active, setActive] = useState(null);

  const refObj = {
    "home": homeRef,
    "about": aboutRef,
    "gallery": galleryRef,
    "contact": contactRef
  }

  useEffect(()=> {
    active && refObj[active].current.scrollIntoView({
      behavior: "smooth",
      block: "end" ,
      inline: "end"
    });
  }, [active])
  
  return (
    <div>     
      <Navbar setActive={setActive}/>
      <Home homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Gallery galleryRef={galleryRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
