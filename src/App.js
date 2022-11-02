import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Routers from './Routers';
import Form from "./Form";
import Create from "./Create";


function App() {
 
  return (
    <>
  
  {/* <Form/> */}

<Create/>

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
