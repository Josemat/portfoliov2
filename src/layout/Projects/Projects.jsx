import React, { useEffect, useState } from 'react'

import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'
import './index.css'
import { proyectos } from './proyectos'
import Svgs from '../Individual/Svgs'
import ProyectosMapeados from './ProyectosMapeados/ProyectosMapeados';



const Projects = () => {
    const [tecnologia, setTecnologia] = useState('')
    return <>

        <div className="proy">
            <div id="projects">
                <h1 id="h1project" className="">Proyectos</h1>
                <XyzTransition appear={false} xyz="fade down ease-in-out-back">
                    {tecnologia && <h1 > {tecnologia} </h1>}
                </XyzTransition>
                <div className='botonera'>
                    <button className="button2" onClick={() => setTecnologia('')} >{`+ Todos (${Object.values(proyectos).length})`}</button>
                    <button className="button2" onClick={() => setTecnologia('React')} ><Svgs icon={'React'} /> React</button>
                    <button className="button2" onClick={() => setTecnologia('NodeJS')} ><Svgs icon={'NodeJS'} /> NodeJS</button>
                    <button className="button2" onClick={() => setTecnologia('PUG')} ><Svgs icon={'PUG'} /> PUG</button>
                    <button className="button2" onClick={() => setTecnologia('JavaScript')} ><Svgs icon={'JavaScript'} /> JavaScript</button>
                    <button className="button2" onClick={() => setTecnologia('Express')} ><Svgs icon={'Express'} /> Express</button>
                    <button className="button2" onClick={() => setTecnologia('MongoDB')} ><Svgs icon={'MongoDB'} /> MongoDB</button>
                    <button className="button2" onClick={() => setTecnologia('Skeleton')} ><Svgs icon={'Skeleton'} /> Skeleton</button>
                    <button className="button2" onClick={() => setTecnologia('MySQL')} ><Svgs icon={'MySQL'} /> MySQL</button>
                    <button className="button2" onClick={() => setTecnologia('Bootstrap')} ><Svgs icon={'Bootstrap'} /> Bootstrap</button>
                    <button className="button2" onClick={() => setTecnologia('TailwindCSS')} ><Svgs icon={'TailwindCSS'} /> TailwindCSS</button>
                    <button className="button2" onClick={() => setTecnologia('Typescript')} ><Svgs icon={'Typescript'} /> Typescript</button>
                    <button className="button2" onClick={() => setTecnologia('Vite')} ><Svgs icon={'Vite'} /> Vite</button>
                    <button className="button2" onClick={() => setTecnologia('MUI')} ><Svgs icon={'MUI'} /> MUI</button>
                    <button className="button2" onClick={() => setTecnologia('Firebase')} ><Svgs icon={'Firebase'} /> Firebase</button>
                </div>
                <ProyectosMapeados tecnologia={tecnologia} />
            </div>
        </div>

    </>
}

export default Projects