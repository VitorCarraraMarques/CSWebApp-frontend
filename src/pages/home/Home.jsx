import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

import Loading from './features/common/Loading'
import Hero from './features/hero/components/Hero'
import NavHome from './features/navhome/components/NavHome'
import Projects from './features/projects/components/Projects'
import About from './features/about/components/About'
import Configs from './features/configs/components/Configs'
import Experience from './features/experience/components/Experience'

import './Home.css';

export default function Home(){
    return (
        <div className="home">
            <Hero />
            <NavHome />
            <Routes> 
                <Route index element={<Navigate to="projects" />} />
                <Route path="about" element={<About/>} />
                <Route path="exp" element={<Experience/>} />
                <Route path="projects" element={<Projects />} />
                <Route path="config" element={<Configs/>} /> 
            </Routes>     

        </div>
    )
}
 