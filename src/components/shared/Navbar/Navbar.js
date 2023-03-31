import React from 'react'
import './Navbar.css'

const Navbar = ({active, scrollActive ,setActive}) => {
  return (
    <div className='main'>
        <nav className='nav'>
        <span className='logo'>LOGO</span>
        <ul>
            <li className={(active === "home" && "active") + (scrollActive === "home" && " scroll-active")} onClick={()=> {
              setActive("home")
            }}>Home</li>
            <li className={(active === "about" && "active") + (scrollActive === "about" && " scroll-active")} onClick={()=> {
              setActive("about")
            }}>About</li>
            <li className={(active === "gallery" && "active") + (scrollActive === "gallery" && " scroll-active")} onClick={()=> {
              setActive("gallery")
            }}>Gallery</li>
            <li className={(active === "contact" && "active") + (scrollActive === "contact" && " scroll-active")} onClick={()=> {
              setActive("contact")
            }}>Contact</li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar