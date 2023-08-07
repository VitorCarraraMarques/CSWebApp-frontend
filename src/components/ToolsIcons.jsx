import React from 'react'

export default function ToolsIcons({ tools }) {

    console.log(tools)
    return (
        <div className='tools-section'>
            <h4 className="tools-header"> Toolkit: </h4>  

            <div className='tools-imgs'>     
                {tools.map(
                    (tool) => (
                        <p key={tool}> {tool} </p>
                    )
                )}
            </div>
        </div>
    )

}