import React from 'react'
import './index.css'

import html from '../../img/html.png'
import css from '../../img/css.png'
import js from '../../img/sj.png'
import git from '../../img/git.png'
import mongo from '../../img/mongo.ico'
import express from '../../img/express.png'
import react from '../../img/reac.png'
import node from '../../img/noddde.png'
import tailwind from '../../img/tailwind-css.webp'
import bootstrap from '../../img/bootstrap-4.webp'
import APV from '../../img/APV.webp'

const individual = ({ proyecto }) => {
    console.log(proyecto.img)
    return (
        <div className="project-tile" >
            <div className="superposition">
                <button className="button"><img className="iconButton" src="" alt="" width="15" height="15" /> { } </button>
            </div>
            <a href={proyecto.link} target="_blank" rel="noreferrer" >
                <img src={proyecto.img} alt="" className="projectImg">
                </img>
                <h3>{proyecto.title}</h3>
                <p>
                    {proyecto.texto}
                </p>
                <p>
                    <a href={proyecto.front}>Ir al FrontEnd </a><br />
                </p>
                <p>
                    {proyecto.code ? <a href={proyecto.code}>Ir al Backend (GitHub)</a> : null}
                </p>
            </a>
        </div>
    )
}

export default individual