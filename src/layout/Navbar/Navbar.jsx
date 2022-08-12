import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <div id="header">
            <nav id="navbar" className="container">
                <a href="#" defaultValue='home' className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Proyectos</a>
                <a href="#contact" className="nav-link">Contacto</a>
            </nav>
        </div>
    )
}

export default Navbar