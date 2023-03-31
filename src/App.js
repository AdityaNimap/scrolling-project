import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Home from './components/pages/Home';
import Navbar from './components/shared/Navbar/Navbar';


function App() {
  

  return (
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
