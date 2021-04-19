import './App.css';
import VideoComponent from './componenets/VideoComponent';

function App() {

var data=[
	{
	"id": 1,
	"video-location": "India",
	"video-source": "youtub.com/123",
	"video-url": "test.mp4"
},
{
	"id": 2,
	"video-location": "America",
	"video-source": "youtub.com/123",
	"video-url": "test.mp4"
}
];



  return (

    
  <>
  <VideoComponent videoData={data[0]} />
  </>
  );
}

export default App;
