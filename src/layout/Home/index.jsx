import React from 'react'
import perfil from '../../img/fotoPerfilNva.png'
import html from '../../img/svg/html5.svg'
import css from '../../img/svg/css.svg'
import js from '../../img/svg/js.svg'
import git from '../../img/svg/git.svg'
import mongo from '../../img/svg/mongo.svg'
import express from '../../img/express.png'
import react from '../../img/svg/react.svg'
import node from '../../img/svg/node.svg'
import tailwind from '../../img/svg/tailwind.svg'
import bootstrap from '../../img/svg/bootstrap.svg'
import photoshop from '../../img/svg/photoshop.svg'
import illus from '../../img/svg/illustrator.svg'
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
                        <code>Desarrollador <span className="codeBlack">FullStack</span> | Desde Córdoba Argentina 🇦🇷 | Autodidacta, proactivo, dinámico, amante del aprendizaje y desafíos. </code>
                        <img src={perfil} alt="fotoPerfil" className="fotoPerfilImg " />
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