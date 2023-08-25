import React from 'react'

import ajax from '../assets/ajax.svg'
import css from '../assets/css.svg'
import defaulticon from '../assets/default.svg'
import django from '../assets/django.svg'
import fastapi from '../assets/fastapi.svg'
import html from '../assets/html.svg'
import javascript from '../assets/javascript.svg'
import kivy from '../assets/kivy.svg'
import p5js from '../assets/p5js.svg'
import pygame from '../assets/pygame.svg'
import python from '../assets/python.svg'



export default function ToolsIcons({ tools }) {
    
    return (
        <div className='tools-section'>
            <h4 className="tools-header"> Toolkit: </h4>  

            <div className='tools-wrapper'>     
                {tools.map(
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