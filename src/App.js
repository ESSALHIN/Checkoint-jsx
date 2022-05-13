
import './App.css';
import image from './image/image.jpg';
import myvideo from './video/myVideo.mp4'
import { findByLabelText } from '@testing-library/react';

function App() {
  return (
    <>
<div style={{border:'solid 1px black',maxwidth:"100vw"}}>

 <h1 style={{textAlign:"center",color:"red"}}className="title red">Nadia ESSALHI</h1>

 <br/>

 <img src={"./image/image.jpg"} alt="image" style={{diplay:"flex", justifyContent:"center", margin:"25%"}} />

 <br/>
 
 <img src={"/public/img.jpg"} alt='img' style={{diplay:"flex", justifyContent:"center", margin:"25%"}}/>
 <br/>
 

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type={"video/mp4"} style={{diplay:"flex", justifyContent:"center", margin:"25%", width:"auto", height:"auto"}} />

</video>
</>


  );
}

export default App;
