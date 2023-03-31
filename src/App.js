import './App.css';
import React, { useRef, useState } from 'react';
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
  const [scrollActive, setScrollActive] = useState("home");
  const [scrollValue, setScrollValue] = useState(0);
  const [positionsObj, setPositionsObj] = useState({
    "home": null,
    "about": null,
    "gallery": null,
    "contact": null
  });

  const refObj = {
    "home": homeRef,
    "about": aboutRef,
    "gallery": galleryRef,
    "contact": contactRef
  }

  useEffect(() => {
    const scrollPosition = window.scrollY;
  setPositionsObj({
    "home": homeRef && homeRef.current.getBoundingClientRect().top + scrollPosition - 70,
    "about": aboutRef && aboutRef.current.getBoundingClientRect().top + scrollPosition - 70*2,
    "gallery": galleryRef && galleryRef.current.getBoundingClientRect().top + scrollPosition - 70*3-1,
    "contact": contactRef && contactRef.current.getBoundingClientRect().top + scrollPosition - 70*4
  })
}, [])


  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if(scrollPosition < positionsObj["about"]){
      setScrollActive("home")
    }else if(scrollPosition >= positionsObj["about"] && scrollPosition < positionsObj["gallery"]){
      setScrollActive("about")
    }else if(scrollPosition >= positionsObj["gallery"] && scrollPosition < positionsObj["contact"]){
      setScrollActive("gallery")
    }else if(scrollPosition >= positionsObj["contact"]){
      setScrollActive("contact")
    }
    // console.log(scrollPosition, aboutRef.current.getBoundingClientRect().top + scrollPosition - 70);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
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
      <Navbar active={active} scrollActive={scrollActive} setActive={setActive} />
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Gallery galleryRef={galleryRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export default App;
