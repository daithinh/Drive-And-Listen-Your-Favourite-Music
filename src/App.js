import './App.css';
import MainComponent from './componenets/mainComponent';



function App() {

var data=[
	{
		"id": 2,
		"video-location": "America",
		"video-source": "youtub.com/123",
		"video-url": "test.mp4",
		"album-url":"https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
	},
	{
	"id": 1,
	"video-location": "India",
	"video-source": "youtub.com/123",
	"album-url":"https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3",
	'video-url':'test.mp4'
}
];



  return (

    
  <>
   
  <MainComponent videoData={data}/>
  </>
  );
}

export default App;
