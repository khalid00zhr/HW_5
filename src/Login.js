import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import tu from './img/tu.png'
import './App.css';

function Login() {
    const[fname,setFname]=useState();
    const[lname,seLname]=useState();
    const navigate = useNavigate();
  return (
    
  
    <section className="py-4 container ">
    <div className="row justify-content-center">

    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                    <div className="card p-4 overflow-hidden h-150 shadow">
                        
                        <img id='lmglogin' src={tu}  className="card-img-top"  />
                       
                        <div className="card-body">
                        <label className="form-lable h6">Email</label>
                        <input type="email" className="form-control" onChange={e => {setFname(e.target.value)}}/>
                        <label className="form-lable h6">password</label>
                        <input type="password" className="form-control"   onChange={e => {seLname(e.target.value)}} />
                        <br/>
            <button className="btn btn-primary no-" onClick={()=>navigate("/card")}> Login </button>
            </div>
            </div>
            </div>
</div>
</section>
  )
}

export default Login