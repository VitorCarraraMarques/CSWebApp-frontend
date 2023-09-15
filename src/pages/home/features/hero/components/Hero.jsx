import React from "react"

import Logo from "../assets/LogoName.png"

export default function Hero(){
    return (
        <div className="hero">
            <img className="hero-logoName" src={Logo}/>
            <div className="hero-info">
                <div className="hero-info-text"> 
                    <p> HABILIDADES DE PROGRAMADOR </p>
                    <p> RACIOCÍNIO DE CIENTISTA </p>
                    <p> COMUNICAÇÃO DE PROFESSOR </p>
                </div>
                <div className="hero-info-nav">
                    <a className="hero-info-nav-link"> {'>'} Experiência Profissional</a>
                    <a className="hero-info-nav-link" href="#projects"> {'>'} Projetos </a>
                </div>
            </div>
        </div>

    )
}