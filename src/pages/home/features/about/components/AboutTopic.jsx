import React from 'react'; 

import AboutContent from './AboutContent'

export default function AboutTopic( {aboutTopic} ){

    return (
        <div className="about-topic">
            <div className="about-topic-header"> 
                {/* <h3 className="about-topic-header-arrow"> ► </h3>  */}
                <h3 className="about-topic-header-name"> ► {aboutTopic.name} </h3>
            </div> 

            <div className="about-topic-content">
                {aboutTopic.content?.map( (cntId) => (
                    <AboutContent key={cntId} id={cntId} /> 
                ))}
            </div> 

        </div> 
    )

}