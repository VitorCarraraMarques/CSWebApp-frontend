import React from 'react'

export default function ProjectCard( { proj } ) { 
    return ( 
        <div className="card">
            <div className="card-name">
                {proj.name}
            </div>
            <div className="card-desc">
                {proj.desc}
            </div>
        </div>
    )}