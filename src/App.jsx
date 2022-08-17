import React, { lazy, Suspense } from 'react'
import './App.css'
import Home from './layout/Home'
import Projects from './layout/Projects/Projects'
import Navbar from './layout/Navbar/Navbar'
const Contact = React.lazy(() => import('./layout/Contact/Contact'))

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </Suspense>
    </>
  )
}

export default App
