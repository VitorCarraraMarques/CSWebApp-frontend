import React from 'react'

import ProjectsList from './features/projects/components/ProjectsList'
import Hero from './features/hero/components/Hero'
import './Home.css';

import useGetProjectsInfo from './features/projects/hooks/useGetProjectsInfo.jsx'

export default function Home(){
    const [projectsInfo, loading] = useGetProjectsInfo([])

    if (loading) return "Loading..."

    return (
        <div className="projects">
            <Hero />
            <ProjectsList projects={projectsInfo} />      

        </div>
    )
}
 