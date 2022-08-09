import React from 'react'
import perfil from '../../img/fotoPerfilNva.png'
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
import photoshop from '../../img/photo.png'
import illus from '../../img/illus.png'
import "@animxyz/core";
import { XyzTransitionGroup } from "@animxyz/react";

import './index.css'

const Home = () => {
    return (
        <div id="home">
            <div className="sobreponer" >
                <XyzTransitionGroup
                    appear
                    timeout="auto"
                    xyz="fade small out-rotate-right appear-stagger"
                >
                    <h1 className='square'>Hola! Soy Emmanuel Tulian</h1>
                    <div className="fotoPerfil">
                        <code>Desarrollador <span className="codeBlack">FullStack</span> | Desde Córdoba Argentina 🇦🇷 | Proactivo,dinámico, amante del aprendizaje continuo y nuevos desafíos. </code>
                        {/* <img src={perfil} alt="fotoPerfil" className="fotoPerfilImg " /> */}
                    </div>

                    <h3>Tecnologías que manejo:</h3>
                    <div className="lista">
                        <ul className=''>
                            <li><img className="imgLi" src={html} alt="html" /> HTML</li>
                            <li><img className="imgLi" src={css} alt="css" /> CSS</li>
                            <li><img className="imgLi" src={js} alt="javascript" /> JavaScript</li>
                            <li><img className="imgLi" src={git} alt="git" /> Git</li>
                        </ul>
                        <ul className=''>
                            <li><img className="imgLi" src={mongo} alt="mongo" /> MongoDB</li>
                            <li><img className="imgLi" src={express} alt="express" /> Express</li>
                            <li><img className="imgLi" src={react} alt="react" /> React</li>
                            <li><img className="imgLi" src={node} alt="nodejs" /> NodeJS</li>

                        </ul>
                        <ul className=''>
                            <li><img className="imgLi" src={tailwind} alt="tailwind-css" /> Tailwind</li>
                            <li><img className="imgLi" src={bootstrap} alt="bootstrap-4" /> Bootstrap</li>
                            <li><img className="imgLi" src={photoshop} alt="Photoshop" /> Photoshop</li>
                            <li><img className="imgLi" src={illus} alt="Illustrator" /> Illustrator</li>
                        </ul>
                    </div>
                </XyzTransitionGroup>
            </div>
        </div>
    )
}

export default Home