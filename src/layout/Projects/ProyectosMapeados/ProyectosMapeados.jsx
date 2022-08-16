import React, { lazy, useState, useEffect } from 'react'
import { proyectos } from '../proyectos';
const Individual = React.lazy(() => import('../../Individual/index'));

const ProyectosMapeados = ({ tecnologia }) => {

    const proy = Object.values(proyectos)
    const [resultado, setResultado] = useState(proy)

    useEffect(() => {
        tecnologia ? setResultado(proy.filter(el => el.boton.includes(tecnologia))) : setResultado(proy)
    }, [tecnologia])


    return resultado.map(proyecto => <Individual key={proyecto.title} proyecto={proyecto} />)
}

export default ProyectosMapeados