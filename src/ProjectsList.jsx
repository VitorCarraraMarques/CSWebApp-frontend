import React from 'react'

import ProjectCard from './ProjectCard'

export default function ProjectsList( { projects } ) { 
    return (  
        <div className="projects-list">
            {projects.map((proj) => (
                <div key={proj.id} className="project-card-wrapper">
                    <ProjectCard  proj={proj}/>
                </div>
            ))}
        </div>
    )
}