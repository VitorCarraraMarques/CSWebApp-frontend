import React from 'react'

import ProjectCard from './ProjectCard'

export default function Projects( { projects } ) { 
    return (        
        <div className="projects page" id="projects">
            <h1 className="section-name">
                PROJETOS
            </h1>
            <div className="projects-card-grid">
                {projects?.map((proj) => (
                        <ProjectCard key={proj.id} proj={proj}/>
                ))}
            </div>
        </div>
    )
}
