import React from 'react'

import ProjectCard from './ProjectCard'

export default function ProjectsList( { projects } ) { 
    return (        
        <div className="card-grid">
            <h1 className="section-name">
                PROJETOS
            </h1>
            <div className="projects-list">
                {projects?.map((proj) => (
                        <ProjectCard key={proj.id} proj={proj}/>
                ))}
            </div>
        </div>
    )
}
