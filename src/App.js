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
  const [active, setActive] = useState("home");

  const refObj = {
    "home": homeRef,
    "about": aboutRef,
    "gallery": galleryRef,
    "contact": contactRef
  }

  useEffect(()=> {
    const headerOffset = 70
    const elementPosition = active && refObj[active].current.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }, [active])
  
  return (
    <div>     
      <Navbar active={active} setActive={setActive}/>
      <Home homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Gallery galleryRef={galleryRef}/>
      <Contact contactRef={contactRef}/>
    </div>
  );
}

export default App;
