import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css';
import axios from "axios";
import data from './data';

function Create() {
    const [fname, setFname] = useState();
    const [lname, seLname] = useState();
    const [emil, setEmil] = useState();
    const [pass, setPass] = useState();
    const [state, setstate] = useState([]);
    const navigate = useNavigate();

    let url = "https://636242897521369cd068e618.mockapi.io/pro";
    const postData = () => {
        axios.post("https://636242897521369cd068e618.mockapi.io/pro", {
            fname,
            lname,
            emil,
            pass
        }).then(res => {
            localStorage.setItem("fname",res.data.fname)
            localStorage.setItem("lname",res.data.lname)
            localStorage.setItem("emil",res.data.emil)
            localStorage.setItem("pass",res.data.pass)
            localStorage.setItem("id",res.data.id)

        }) }

    useEffect(() => {
        axios.get(url).then((res) => {
            setstate(res.data);

        })
    }, [])

    const onDelete=(id)=>{
        axios.delete(`https://636242897521369cd068e618.mockapi.io/pro/${id}`).then((res)=>{
          setstate(state.filter(del =>{
            return del.id != id 
          }))
        
        
        })}
        
    return (
<>
        <form className="row g-3">
            <div className="col-md-50">

                <div className="col-11 col-md-6 col-lg-3 mx-0 mb-2">
                    <div className="card p-9 overflow-hidden h-400 shadow">

                        <div className="card-body">
                            <label className="form-lable h6">First Name</label>
                            <input type="text" className="form-control " onChange={data => { setFname(data.target.value) }}  />
                            <label className="form-lable h6">Last Name</label>
                            <input type="text" className="form-control" onChange={data => { seLname(data.target.value) }}  />
                            <label className="form-lable h6">Email</label>
                            <input type="text" className="form-control" onChange={data=> { setEmil(data.target.value) }}  />
                            <label className="form-lable h6">password</label>
                            <input type="text" className="form-control" onChange={data=> { setPass(data.target.value) }} />
                            <br />
                            {/* <button className="btn btn-primary"  onClick={()=> navigate('/form')}> Create </button> */}
                            <button className="btn btn-primary no-"  onClick={postData }> Create </button>
                        </div>
                    </div>
                </div>
            </div>

        </form>


                
   { state.map((data,index)=>(
     
        
    
      <div key={index} > 
  
    
             
             <h4 >{data.fname}</h4>
             <p >{data.lname} </p>
             <p >{data.emil} </p>
             <p >{data.pass} </p>
             <div>
             <button className="btn btn-danger" onClick={()=>{onDelete(data.id)}} >Delete</button>
            <a  href='/update'><button className="btn btn-warning" onClick={()=>localStorage.setItem("id",data.id)}>Update</button></a>
             </div>
         </div>
        
        
  
       ))}

    </>
 
    )
}

export default Create