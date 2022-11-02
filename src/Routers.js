import React from 'react'
import { Route , Routes} from 'react-router-dom'
import Nav from './Nav'
import Login  from './Login';
import Search from './Search';
function Routers() {

  return (
    <div>
        <Nav/>
                <Routes>
                  <Route exact path='/' element={<Login/>} />
                <Route path='/card' element={<Search/>} />
                 </Routes>
    </div>
  )
}

export default Routers