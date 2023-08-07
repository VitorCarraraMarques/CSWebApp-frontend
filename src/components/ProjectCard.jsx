import React from 'react'

import LinkIcons from './LinkIcons'
import ToolsIcons from './ToolsIcons'

export default function ProjectCard( { proj } ) { 
    return ( 
        <div className="card one">
            <div className="card-cover"> 
                <img className="card-gif" src={proj.cover} alt={"Gif do projeto " + proj.name} ></img>
            </div>
            <div className="card-info">    
                <LinkIcons links={[proj.ext_link, proj.repo_link]}/>
                <ToolsIcons tools={proj.toolkit.tools}/>
            </div>
        </div>
    )}