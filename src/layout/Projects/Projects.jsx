import React, { lazy, Suspense, useEffect, useState } from 'react'

import "@animxyz/core";
import { XyzTransition } from '@animxyz/react'
import './index.css'
import { proyectos } from './proyectos'
import Svgs from '../Individual/Svgs'



const Individual = React.lazy(() => import('../Individual/index'));
const Projects = () => {
    const proy = Object.values(proyectos)
    const [tecnologia, setTecnologia] = useState('')
    const [resultado, setResultado] = useState(proy)

    useEffect(() => {
        tecnologia ? setResultado(proy.filter(el => el.boton.includes(tecnologia))) : setResultado(proy)
    }, [tecnologia])
    return <>
        <Suspense fallback={<div>Loading...</div>}>
            <div className="proy">
                <section id="projects">
                    <h1 id="h1project" className="">Proyectos</h1>
                    <XyzTransition appear={false} xyz="fade down ease-in-out-back">
                        {tecnologia && <h1 > {tecnologia} </h1>}
                    </XyzTransition>
                    <div className='botonera'>
                        <button className="button2" onClick={() => setTecnologia('')} >{`+ Todos (${proy.length})`}</button>
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
                    </div>
                    {resultado.map(proyecto => <Individual key={proyecto.title} proyecto={proyecto} />)}
                </section>
            </div>
        </Suspense>
    </>
}

export default Projects