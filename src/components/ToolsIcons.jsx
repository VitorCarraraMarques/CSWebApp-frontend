import React from 'react'

import ajax from '../assets/ajax.png'
import css from '../assets/css.png'
import defaulticon from '../assets/default.png'
import django from '../assets/django.png'
import fastapi from '../assets/fastapi.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import kivy from '../assets/kivy.png'
import p5js from '../assets/p5js.png'
import pygame from '../assets/pygame.png'
import python from '../assets/python.png'



export default function ToolsIcons({ tools }) {
    
    return (
        <div className='tools-section'>
            <h4 className="tools-header"> Toolkit: </h4>  

            <div className='tools-wrapper'>     
                {tools?.map(
                    (tool) => (
                        <img className='tool-img' src={findToolIcon(tool)} key={tool}/>
                    )
                )}
            </div>
        </div>
    )

}




function findToolIcon(toolName){
    switch (toolName){
        case 'ajax':
            return ajax;
        case 'css':
            return css;
        case 'django':
            return django;
        case 'fastapi':
            return fastapi;
        case 'html':
            return html;
        case 'javascript':
            return javascript;
        case 'kivy':
            return kivy;
        case 'p5js':
            return p5js;
        case 'pygame':
            return pygame;
        case 'python':
            return python;
        default:
            return defaulticon;
    }
}