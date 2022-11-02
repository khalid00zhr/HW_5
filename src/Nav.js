import React, { Component } from 'react'
import tu from './img/tu.png'

export default class 
 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light">
  <div className="container-fluid">
    <div className="navbar-brand" src="#">
      <img src={tu}  width="150%" height="24" className="d-inline-block align-text-top"/>
      <a className="text-dark no-underline" href='/' >Login</a>
    </div>
  </div>
</nav>
      </div>
    )
  }
}
