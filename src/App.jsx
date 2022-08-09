import { useState } from 'react'
import { Route, Link, Switch } from 'wouter'
import './App.css'
import Home from './layout/Home'
import Projects from './layout/Projects/Projects'
import { XyzTransition } from "@animxyz/react";
import "@animxyz/core";
// import { XyzTransitionGroup } from "@animxyz/react";

function App() {


  return (
    <>
      <div id="header">
        <nav id="navbar" className="container">
          <a href="#" defaultValue='home' className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Proyectos</a>
          <a href="#footer" className="nav-link">Contacto</a>
        </nav>
      </div>
      <Home />
      <Projects />



    </>
  )
}

export default App
