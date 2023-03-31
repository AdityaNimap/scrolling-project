import React from 'react'
import './Navbar.css'

const Navbar = ({setActive}) => {
  return (
    <div className='main'>
        <nav className='nav'>
        <span className='logo'>LOGO</span>
        <ul>
            <li onClick={()=> {
              setActive("home")
            }}>Home</li>
            <li onClick={()=> {
              setActive("about")
            }}>About</li>
            <li onClick={()=> {
              setActive("gallery")
            }}>Gallery</li>
            <li onClick={()=> {
              setActive("contact")
            }}>Contact</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar