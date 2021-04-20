import React from 'react'
import MenuComponent from './MenuComponent'

export default function VideoComponent(props) {
    return (
        <div>
            <video autoPlay muted loop  id="main-video" src={props.videoData['video-url']}></video>
            <MenuComponent videoData={props.videoData}/>
        </div>
        
    )
}
