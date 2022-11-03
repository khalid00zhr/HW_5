import React, { useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Routers from './Routers';
 


function Form() {
    const[state,setstate] = useState([]);
    useEffect (()=>{
      axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline").then((res)=>{
        setstate(res.data);
        console.log(res.data);
      })
    },[])
// const onDelete=(id)=>{
// axios.delete(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline/${id}`).then((res)=>{
//   setstate(state.filter(del =>{
//     return del.id != id 
//   }))


// })

// }
  return (
    <>



  
<div className="bg-dark row justify-content-center">
   

   {state.map((e)=>(
     
        
     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
       <div className="card p-0 overflow-hidden h-100 shadow"> 
   
              <img src={e.image_link} />
              
              <h4 className="card-title">{e.name}</h4>
              <h6 className="card-subtitle mb-2 text-muted">{e.price} $</h6>
              <div>
              {/* <button className="btn btn-danger" onClick={()=>{onDelete}}>Delete</button> */}
              </div>
          </div>
         </div>
         
   
        ))}
    
          </div>

    </>
  )
}

export default Form