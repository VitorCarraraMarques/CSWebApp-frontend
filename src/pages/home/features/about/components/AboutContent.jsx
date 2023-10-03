import React from 'react'

import useGetAboutContentById from '../hooks/useGetAboutContentById'
import AboutProgOtherTools from '../assets/AboutProgOtherTools.png'
import AboutProgTierList from '../assets/AboutProgTierList.png'
import defaulticon from '../assets/default.png'


export default function AboutContent( { id } ){
    let content = useGetAboutContentById(id)

    console.log(content)

    if (content.type == "text"){
        return (
            <p className="about-topic-content-text"> {content.content} </p> 
        )
    }
    
    if (content.type == "image"){
        return (
            <img className="about-topic-content-image" src={findAboutContentImage(content.content)} /> 
        )
    }

    return <p> Deu problema aqui no servidor. Foi mal </p>
}



function findAboutContentImage( contentName ) {
    switch (contentName){
        case 'AboutProgTierList': 
            return AboutProgTierList; 
        case 'AboutProgOtherTools': 
            return AboutProgOtherTools; 
        default:
            return defaulticon;
    }
}