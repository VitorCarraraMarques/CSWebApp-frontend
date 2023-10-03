import React from 'react'

import ProjectCard from './ProjectCard'
import Loading from '../../common/Loading'
import useGetProjectsInfo from '../../projects/hooks/useGetProjectsInfo.jsx'

export default function Projects(  ) { 
    const [projectsInfo, loading] = useGetProjectsInfo([])

    if (loading) return <Loading />

    
    return (        
        <div className="projects page" id="projects">
            <h1 className="section-name">
                PROJETOS
            </h1>
            <div className="projects-card-grid">
                {projectsInfo?.map((proj) => (
                        <ProjectCard key={proj.id} proj={proj}/>
                ))}
            </div>
        </div>
    )
}
