(this["webpackJsonpdrive-and-listen"]=this["webpackJsonpdrive-and-listen"]||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r),o=i(2),c=i.n(o),a=(i(13),i(14),i(1));function s(e){var t=e.album;return Object(a.jsx)("div",{children:Object(a.jsx)("iframe",{title:"Spotify Frame",src:t,width:"300",height:"380",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})})}var d=i(8);function l(e){var t=e.data;console.log(t.length);for(var i=[],r=0;r<t.length;r++){var n={};n.value=t["video-location"],n.label=t["video-location"],i.push(n)}return Object(a.jsx)("div",{children:Object(a.jsx)(d.a,{options:i})})}function b(e){var t=e.videoData,i=t[e.iterationIndex];return Object(a.jsxs)("div",{draggable:"true",id:"mydiv",children:[Object(a.jsx)("div",{align:"right",children:" x \xa0"}),Object(a.jsxs)("div",{id:"mydivheader",className:"text-bold",children:["Drive and Listen Your Favourite Music ",Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"text-bold",children:"Select Location"}),Object(a.jsx)(l,{data:t}),Object(a.jsx)("div",{className:"text-bold",children:"Car Speed"}),Object(a.jsx)("button",{children:"0.5 X"}),"\xa0",Object(a.jsx)("button",{children:"1 X"}),"\xa0",Object(a.jsx)("button",{children:"1.5 X"}),"\xa0",Object(a.jsx)("button",{children:"2 X"}),Object(a.jsx)("div",{className:"text-bold",children:"Settings"}),Object(a.jsxs)("div",{className:"text-normal",children:["Street Noise \xa0",Object(a.jsx)("button",{children:" \xa0On \xa0"})]}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"text-bold",children:"Credits"}),Object(a.jsxs)("div",{className:"text-normal",children:[Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:i["video-source"],children:"Video Source"})," | ",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"http://patreon.com/kaustubhk24",children:"Buy Me a Coffee"}),"   ",Object(a.jsx)("br",{})," ",Object(a.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/kaustubhk24/Drive-And-Listen-Your-Favourite-Music/issues/new?labels=Copyright%20Infringement&title=Copyright+Issues+With+Video&body=The%20video%20I%20have%20issues%20with%20is `"+i["video-url"]+"` %0AFollowing%20are%20the%20details%20of%20my%20copyrights",children:"Copyright Report"})," "]}),Object(a.jsx)("div",{className:"text-bold",children:"Music"}),Object(a.jsxs)("div",{className:"text-normal",children:["Don't Like this playlist? ",Object(a.jsx)("br",{}),"  Paste Favourite Album Url in box below",Object(a.jsx)("br",{})," ",Object(a.jsx)("input",{type:"text",placeholder:"Paste URL here"})]}),Object(a.jsx)("br",{}),Object(a.jsx)(s,{album:i["album-url"]})]})]})}function j(e){var t=e.videoData[e.iterationIndex],i=window.location.origin+"/videos/"+t["video-url"];return Object(a.jsx)("div",{children:Object(a.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,id:"main-video",src:i})})}function u(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)(b,{videoData:e.data,iterationIndex:1}),Object(a.jsx)(j,{videoData:e.data,iterationIndex:1})]})}var h=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(u,{data:[{id:2,"video-location":"America","video-source":"youtub.com/123","video-url":"test.mp4","album-url":"https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"},{id:1,"video-location":"India","video-source":"youtub.com/123","album-url":"https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3","video-url":"test.mp4"}]})})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,32)).then((function(t){var i=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),r(e),n(e),o(e),c(e)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),x()}},[[31,1,2]]]);
//# sourceMappingURL=main.e53835ff.chunk.js.map