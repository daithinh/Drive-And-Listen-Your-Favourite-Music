import React from 'react'
import MenuComponent from './MenuComponent'
import VideoComponent from './VideoComponent'

export default function MainComponent(props) {
    console.log(props.videoData[1])
    return (
        <div>
            <MenuComponent videoData={props.videoData[1]}/>
            <VideoComponent videoData={props.videoData[1]}/>
        </div>
    )
}
