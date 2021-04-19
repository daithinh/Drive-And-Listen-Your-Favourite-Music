import React from 'react'

export default function VideoComponent(props) {
    return (
        <div>
            <video autoPlay muted loop  id="main-video" src={props.videoData['video-url']}></video>
        </div>
        
    )
}
