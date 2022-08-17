import React, { lazy, Suspense } from 'react'
import './App.css'
import Home from './layout/Home'
import Navbar from './layout/Navbar/Navbar'
import Spinner from './Spinner/Spinner'
const Projects = lazy(() => import('./layout/Projects/Projects'))
const Contact = lazy(() => import('./layout/Contact/Contact'))

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Navbar />
        <Home />
        <Projects />
        <Contact />
      </Suspense>
    </>
  )
}

export default App
