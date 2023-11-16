import React from 'react'
import About from './About'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
  const navigate=useNavigate();
  const handleHomeClick=()=>{
    console.log("in home")
    navigate('/')
  }
  const handleAboutClick=()=>{
    navigate('/about')
  }
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <h1>{props.age}</h1>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
       
        
      </ul> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item m-2">
        <button onClick={handleHomeClick} >Home</button> </li>
      <li className="nav-item m-2">
      <button onClick={handleAboutClick} >About</button> </li>
      </ul>
      {props.searchc?<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>:"no serch bar"}

    </div>
  </div>
</nav>
  )
}
Header.defaultProps=
{
    title:"Your title comes here",
    
}
Header.propTypes={
    title:PropTypes.string
}
