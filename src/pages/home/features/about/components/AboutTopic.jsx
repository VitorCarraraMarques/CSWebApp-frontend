import React from 'react'; 
import { useState, useEffect } from 'react';

import AboutContent from './AboutContent'

export default function AboutTopic( {aboutTopic} ){

    
    let [visible, setVisible] = useState(false);
    
    function toggleContent(){
        setVisible(!visible);
    }


    return (
        <div className="about-topic" >
            <div className="about-topic-header" onClick={toggleContent}> 
                <span className={`about-topic-header-arrow ${visible ? "arrow-rotated" : ""}`}> ► </span>
                <span className="about-topic-header-name">  {aboutTopic.name} </span>
            </div> 

            <div className={`about-topic-content ${visible ? "content-visible" : ""}` }>
                {aboutTopic.content?.map( (cntId) => (
                    <AboutContent key={cntId} id={cntId} /> 
                ))}
            </div> 

        </div> 
    )

}