import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props){
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark"> */}
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home </Link>
        </li>
      
      
        <li className="nav-item active">
          <Link className="nav-link" to="/About">About </Link>
        </li>
      </ul>
      
      <button id="primary" type="button" onClick={props.changeTheme} className="btn btn-primary mx-2 rounded-circle"></button>
      <button id="secondary" type="button" onClick={props.changeTheme} className="btn btn-secondary mx-2 rounded-circle"></button>
      <button id="warning" type="button" onClick={props.changeTheme} className="btn btn-warning mx-2 rounded-circle"></button>
      <button id="info" type="button" onClick={props.changeTheme} className="btn btn-info mx-2 rounded-circle"></button>
  
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
      </div>
  </nav>
  
   
      </>
  
    )
}


Navbar.propTypes = { 
  title : PropTypes.string

}