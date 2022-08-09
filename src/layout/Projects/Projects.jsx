import React from 'react'
import Individual from '../Individual/index'
import './index.css'
import { proyectos } from './proyectos'


const Projects = () => {
    console.log(proyectos)
    return <>
        <div className="proy">
            <section id="projects">
                <h1 id="h1project" className="h1project">Proyectos</h1>
                <Individual />
                <Individual />
                <Individual />
                <Individual />
                <Individual />
                <Individual />

            </section>
        </div>
    </>

}

export default Projects