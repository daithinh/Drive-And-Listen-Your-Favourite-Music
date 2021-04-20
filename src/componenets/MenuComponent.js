import React from 'react'
import AudioFrame from './AudioFrame'
import CitySelections from './CitySelections';


export default function MenuComponent({videoData,iterationIndex}) {
var reportURL="https://github.com/kaustubhk24/Drive-And-Listen-Your-Favourite-Music/issues/new?labels=Copyright%20Infringement&title=Copyright+Issues+With+Video&body=The%20video%20I%20have%20issues%20with%20is `";
var reportURL_part_2="` %0AFollowing%20are%20the%20details%20of%20my%20copyrights";
    
var dt=videoData[iterationIndex];

    
    return (
<div draggable="true" id="mydiv">
<div align="right"> x &nbsp;</div>
  <div id="mydivheader" className="text-bold">Drive and Listen Your Favourite Music <br/>
  <div className="text-bold">Select Location</div>
  <CitySelections data={videoData}/>
  
    <div className="text-bold">Car Speed</div>
    <button>0.5 X</button>&nbsp;
    <button>1 X</button>&nbsp;

    <button>1.5 X</button>&nbsp;
    <button>2 X</button>

    <div className="text-bold">Settings</div>
    <div className="text-normal">Street Noise &nbsp;<button> &nbsp;On &nbsp;</button></div>
 <br/>
 <div className="text-bold">Credits</div>
 <div className="text-normal"><a target="_blank" rel="noreferrer" href={dt['video-source']}>Video Source</a> | <a rel="noreferrer" target="_blank" href="http://patreon.com/kaustubhk24">Buy Me a Coffee</a>   <br/> <a rel="noreferrer" target="_blank" href={reportURL+dt['video-url']+reportURL_part_2}>Copyright Report</a> </div>

 <div className="text-bold">Music</div>
 <div className="text-normal">Don't Like this playlist? <br/>  Paste Favourite Album Url in box below<br/> <input type="text" placeholder="Paste URL here"/></div>
<br/>
<AudioFrame album={dt['album-url']}/>

 </div>
  
</div>
    )
}
