import React, { useEffect, useState } from 'react'

import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'
import './index.css'
import { proyectos } from './proyectos'
import Svgs from '../Individual/Svgs'
import ProyectosMapeados from './ProyectosMapeados/ProyectosMapeados';



const Projects = () => {
    const [tecnologia, setTecnologia] = useState('')
    const tecnologiasMap = ["React", "NodeJS", "PUG", "JavaScript", "Express", "MongoDB", "Skeleton", "MySQL", "Bootstrap", "TailwindCSS", "Typescript", "Vite", "MUI", "Firebase"]
    function boton(tecno) {
        return <button className="button2" onClick={() => setTecnologia(tecno)} ><Svgs icon={tecno} /> {tecno}</button>
    }
    return <>

        <div className="proy">
            <div id="projects">
                <h1 id="h1project" className="">Proyectos</h1>
                <XyzTransition appear={false} xyz="fade down ease-in-out-back">
                    {tecnologia && <h1 > {tecnologia} </h1>}
                </XyzTransition>
                <div className='botonera'>
                    <button className="button2" onClick={() => setTecnologia('')} >{`+ Todos (${Object.values(proyectos).length})`}</button>
                    {tecnologiasMap.map(tec => boton(tec))}
                </div>
                <ProyectosMapeados tecnologia={tecnologia} />
            </div>
        </div>

    </>
}

export default Projects