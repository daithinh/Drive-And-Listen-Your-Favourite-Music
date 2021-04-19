import './App.css';
import MenuComponent from './componenets/MenuComponent';
import VideoComponent from './componenets/VideoComponent';
function App() {

var data=[
	{
		"id": 2,
		"video-location": "America",
		"video-source": "youtub.com/123",
		"video-url": "test.mp4"
	},
	{
	"id": 1,
	"video-location": "India",
	"video-source": "youtub.com/123",
	"video-url": "https://r5---sn-cvh7knll.googlevideo.com/videoplayback?expire=1618850049&ei=oVx9YOSsMdCEx_APkOeS6Ak&ip=45.10.232.50&id=o-AFaml7rRTIEG5cLwl2yXQqRJYcWWihS-ILPpN9DbF2FD&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=DZv-QmksBNLKPcMPHTtc48UF&cnr=14&ratebypass=yes&dur=2252.196&lmt=1576830984108879&fvip=5&fexp=24001373,24007246&c=WEB&txp=6316222&n=4t7FeqFGqoiuZG&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhALXjTs1lPXKeblHxs_xqelcLEmtH1YtxHFIaHggCdBhDAiEAyUQJBnqsPKVOb9BeELqwKDKue9PH7YOnqgTvkBwjZxc%3D&title=Paris%204K%20-%20Classic%20Paris%20Streets%20-%20Driving%20Downtown&rm=sn-25gde76&req_id=7c0f5e6ee5d2a3ee&cm2rm=sn-ci5gup-2o9e76,sn-ci5gup-cvhk76&redirect_counter=3&cms_redirect=yes&ipbypass=yes&mh=pr&mip=106.210.129.23&mm=30&mn=sn-cvh7knll&ms=nxu&mt=1618828113&mv=m&mvi=5&pl=22&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgNGzPBwQG6JSXh__MHPXmFFl9GOqfspSaeZv39fWzT0gCICaN727toYsdoc-Fok3CYGBfY10mC02KFKWikCsLsDvp"
}
];



  return (

    
  <>
  <MenuComponent/>
  <VideoComponent videoData={data[0]} />
  </>
  );
}

export default App;
