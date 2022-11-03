import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';
import axios from "axios";


function Update() {
    const [fname, setFname] = useState("");
    const [lname, seLname] = useState("");
    const [emil, setEmil] = useState("");
    const [pass, setPass] = useState("");
    const [id, setId] = useState("");
    const navigate = useNavigate();

  
    useEffect(()=>{

        setId(localStorage.getItem("id"));
        setFname(localStorage.getItem("fname"));
        seLname(localStorage.getItem("lname"));
        setEmil(localStorage.getItem("emil"));
        setPass(localStorage.getItem("pass"));
    },[])

   

   const updatedata =()=>{
    axios.put(`https://636242897521369cd068e618.mockapi.io/todo/${id}`,{
        fname,
        lname,
        emil,
        pass
    }).then(res=>{
        console.log(res.id);
        navigate("/");
    }).catch(err=>{
        console.log(err);
    })
   }
    return (
<>
        <form className="row g-3">
            <div className="col-md-50">

                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-2">
                    <div className="card p-9 overflow-hidden h-400 shadow">

                        <div className="card-body">
                            <label className="form-lable h6">First Name</label>
                            <input type="text" className="form-control " onChange={e => { setFname(e.target.value) }}  />
                            <label className="form-lable h6">Last Name</label>
                            <input type="text" className="form-control" onChange={e => { seLname(e.target.value) }}  />
                            <label className="form-lable h6">Email</label>
                            <input type="text" className="form-control" onChange={e => { setEmil(e.target.value) }}  />
                            <label className="form-lable h6">password</label>
                            <input type="text" className="form-control" onChange={e => { setPass(e.target.value) }} />
                            <br />
                         
                            <button className="btn btn-dark"  onClick={()=>updatedata}> Update </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>


                
  

    </>
 
    )
}

export default Update