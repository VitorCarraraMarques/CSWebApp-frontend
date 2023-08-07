import React from 'react'

export default function ProjectCard( { proj } ) { 
    return ( 
        <div className="card one">
            <div className="card-cover"> 
                <img className="card-gif" src={proj.cover} alt={"Gif do projeto " + proj.name} ></img>
            </div>
            <div className="card-info"> 
                <div className="card-name">
                    {proj.name}
                </div>
                <div className="card-desc">
                    {proj.desc}
                </div>
            </div>
        </div>
    )}