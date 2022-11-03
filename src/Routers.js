import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Nav from './Nav'
import Login  from './Login';
import Search from './Search';
import  Form  from './Form';
import Create from './Create';
import Update from './Update';
function Routers() {

  return (
    <div>
        <Nav/>
                <Routes>
                  <Route exact path='/' element={<Create/>} />
                  <Route path='/card' element={<Search/>} />
                  <Route path='/form' element={<Form/>} />
                  <Route path='/update' element={<Update/>} />
                 </Routes>
    </div>
  )
}

export default Routers