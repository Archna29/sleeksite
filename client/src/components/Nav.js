import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from './Images/logo.png';
const Nav = () => {
  //this is for navbar component
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand " to="#">
    <img src={logo} alt="logo" className="mainlogo"/>
 SleekSite</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <NavLink className="nav-link " aria-current="page"  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/about'>About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/login'>Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/signup'>Register</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>  
        </>
    )
}

export default Nav
