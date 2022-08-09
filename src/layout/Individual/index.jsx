import React from 'react'
import './index.css'

const individual = (botones, imagen,) => {
    return (
        <div className="project-tile" >
            <div className="superposition">
                <button className="button"><img className="iconButton" src="" alt="" width="15" height="15" /> React </button>
                <button className="button"><img className="iconButton" src="" alt="" width="15" height="15" /> Express </button>
                <button className="button"><img className="iconButton" src="" alt="" width="15" height="15" /> MongoDB </button>
                <button className="button"><img className="iconButton" src="" alt="" width="15" height="15" /> NodeJS </button>
                <button className="button"><img className="iconButton" src="" alt="" width="15" height="15" /> Tailwind CSS </button>
            </div>
            <a href="https://regal-faloodeh-f47ee4.netlify.app/" target="_blank" rel="noreferrer" >
                <img src="" alt="" className="projectImg">
                </img>
                <h3>Página de Administrador de Pacientes</h3>
                <p>Proyecto final con stack MERN (MongoDB, Express, React, NodeJS) con validación y registro real (usar mail real y verificar carpeta spam). CRUD de DB
                </p>
                <p>
                    <a href="https://github.com/Josemat/APV-MERN-FRONT">Ir al FrontEnd (GitHub)</a><br />
                </p>
                <p>
                    <a href="https://github.com/Josemat/APV-MERN-BACK">Ir al Backend (GitHub)</a><br />
                </p>
            </a>
        </div>
    )
}

export default individual