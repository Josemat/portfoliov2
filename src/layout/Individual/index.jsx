import React from 'react'
import './index.css'
import Svgs from './Svgs'
import Imagen from './Imagen'
import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'


const individual = ({ proyecto }) => {
    const botones = proyecto.boton
    const toggled = true
    return (<>
        <XyzTransition appear appearVisible={{ threshold: 0.3, rootMargin: '150px' }} xyz="fade down ease-in-out-back">
            {toggled && <div className="project-tile" key={proyecto.link}>
                <div className="superposition">
                    {botones.map(boton => <button className="button" key={boton += 1}><Svgs icon={boton} /> {boton}</button>
                    )}
                </div>
                <Imagen img={proyecto.img} />
                <div className='texto'>
                    <h3>{proyecto.title}</h3>
                    <p>{proyecto.texto}</p>
                    <a href={proyecto.front} target="_blank">Ir al proyecto</a>
                    {proyecto.code ? <a href={proyecto.code} target="_blank">Ir al Backend (GitHub)</a> : null}
                </div>
            </div>}
        </XyzTransition>
    </>
    )
}

export default individual