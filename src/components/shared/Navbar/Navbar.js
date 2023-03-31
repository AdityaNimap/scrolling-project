import React from 'react'
import './Navbar.css'

const Navbar = ({active, setActive}) => {
  return (
    <div className='main'>
        <nav className='nav'>
        <span className='logo'>LOGO</span>
        <ul>
            <li className={active === "home" && "active"} onClick={()=> {
              setActive("home")
            }}>Home</li>
            <li className={active === "about" && "active"} onClick={()=> {
              setActive("about")
            }}>About</li>
            <li className={active === "gallery" && "active"} onClick={()=> {
              setActive("gallery")
            }}>Gallery</li>
            <li className={active === "contact" && "active"} onClick={()=> {
              setActive("contact")
            }}>Contact</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar