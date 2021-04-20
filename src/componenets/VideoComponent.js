import React from 'react'

export default function VideoComponent({ videoData, iterationIndex, speed }) {
    var dt = videoData[iterationIndex];
    var uri = window.location.origin + "/videos/" + dt['video-url']

    return (
        <div>
            <video autoPlay muted loop id="main-video" src={uri}></video>
        </div>

    )
}
