import React from 'react'
import MenuComponent from './MenuComponent'
import VideoComponent from './VideoComponent'

export default function MainComponent(props) {
var val=1
    return (
        <div>
            <MenuComponent  videoData={props.data} iterationIndex={val}/>
            <VideoComponent videoData={props.data} iterationIndex={val}/>
        </div>
    )
}
