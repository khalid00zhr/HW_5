import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';
import axios from "axios";

function Create() {
    const [fname, setFname] = useState();
    const [lname, seLname] = useState();
    const [emil, setEmil] = useState();
    const [pass, setPass] = useState();
    const [state, setstate] = useState([]);

    let url = "https://636242897521369cd068e618.mockapi.io/todo";
    const postData = () => {
        axios.post(url, {
            fname,
            lname,
            emil,
            pass
        }).then(res => {

        }) }

    useEffect(() => {
        axios.get(url).then((res) => {
            setstate(res.data);

        })
    }, [])
    return (
<>
        <form class="row g-3">
            <div class="col-md-50">

                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-2">
                    <div className="card p-9 overflow-hidden h-400 shadow">

                        <div className="card-body">
                            <label className="form-lable h6">First Name</label>
                            <input type="text" className="form-control " onChange={e => { setFname(e.target.value) }} required />
                            <label className="form-lable h6">Last Name</label>
                            <input type="text" className="form-control" onChange={e => { seLname(e.target.value) }}  required/>
                            <label className="form-lable h6">Email</label>
                            <input type="text" className="form-control" onChange={e => { setEmil(e.target.value) }}  required/>
                            <label className="form-lable h6">password</label>
                            <input type="text" className="form-control" onChange={e => { setPass(e.target.value) }}  required/>
                            <br />
                            <button className="btn btn-primary no-"  onClick={postData}> Create </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>


                
   { state.map((e)=>(
     
        
    
      <div className="card p-0 overflow-hidden h-100 shadow"> 
  
    
             
             <h4 className="card-title">{e.fname}</h4>
             <h6 className="card-subtitle mb-2 text-muted">{e.lname} </h6>
             <h6 className="card-subtitle mb-2 text-muted">{e.emil} </h6>
             <h6 className="card-subtitle mb-2 text-muted">{e.pass} </h6>
             
         </div>
        
        
  
       ))}

    </>
 
    )
}

export default Create