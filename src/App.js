import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Routers from './Routers';
import './App.css';
import Create from "./Create";


function App() {
  const[state,setstate] = useState([]);
  useEffect (()=>{
    axios.get("https://636242897521369cd068e618.mockapi.io/todo").then((res)=>{
      setstate(res.data);
      console.log(res.data);
    })
  },[])
  return (
    <>

{state.map((e)=>(
     <div  id="grid"className="container">  
    <div >

       <p>{e.fname}</p>
       <p>{e.lname}</p>
       <p>{e.emil}</p>
       <p>{e.pass}</p>
       </div>
       </div>

     ))}


{/* <Create/> */}

{/*    
   {state.map((e)=>(
     <div  id="grid"className="container">  
    <div >
     <img src={e.image} />
       <p>{e.name}</p>
       </div>
       </div>

     ))} */}



    {/* <Routers/>  */}
    
    </>
  );
}


export default App;
