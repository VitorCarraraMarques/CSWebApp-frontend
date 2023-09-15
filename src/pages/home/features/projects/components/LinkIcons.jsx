import React from 'react'

import github_icon from "../assets/github-icon.png"
import ext_link_icon from "../assets/ext-link-icon.png"


export default function LinkIcons({ links }) {
    const ext_link = links[0]
    const repo_link = links[1]
    
    if (ext_link == null && repo_link == null) return <></>

    if (ext_link == null){
        return (
            <div className="links-wrapper">
                <a href={repo_link} className="github-link"> 
                    <img src={github_icon}/>
                </a>
            </div>
        )
    }
    
    if (repo_link == null){
        return (
            <div className="links-wrapper">
                <a href={ext_link} className="ext-link"> 
                    <img src={ext_link_icon}/>
                </a>
            </div>
        )
    }
    
    return (
        <div className="links-wrapper">
            <a href={repo_link} className="github-link"> 
                <img src={github_icon}/>
            </a>
            <a href={ext_link} className="ext-link"> 
                <img src={ext_link_icon}/>
            </a>
        </div>
    )
}