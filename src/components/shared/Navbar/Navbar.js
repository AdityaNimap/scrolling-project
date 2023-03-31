import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='main'>
        <nav className='nav'>
        <div className='site'>ABC</div>
        <ul>
            <li><Link activeClass="active" to='/' spy={true} smooth={true} offset={-40} duration={500} >Home</Link></li>
            <li><Link activeClass="active" to='/about' spy={true} smooth={true} offset={-40} duration={500}>About</Link></li>
            <li><Link activeClass="active" to='/gallery' spy={true} smooth={true} offset={-40} duration={500}>Gallery</Link></li>
            <li><Link activeClass="active" to='/contact' spy={true} smooth={true} offset={-40} duration={500}>Contact</Link></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar