import React from 'react' 

import AboutTopic from './AboutTopic'
import Loading from '../../common/Loading'
import useGetAbout from '../hooks/useGetAbout'

export default function About(){
    let [aboutList, loading] = useGetAbout([]);

    if (loading) return <Loading />
    
    return (
        <div className="about page">
                <h1 className="section-name">
                    SOBRE MIM
                </h1>

                <div className="about-list"> 
                    {aboutList?.map((aboutTopic) => (
                        <AboutTopic key={aboutTopic.id} aboutTopic={aboutTopic}/>
                    ))}
                </div>
        </div>
    )
}