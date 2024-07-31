import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container">
      <a className="navbar-brand" href="#">Todo App</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item "><Link to="/" className='nav-link text-white'>Home</Link></li>
          <li className="nav-item"><Link to="/todo" className='nav-link text-white' >Table</Link></li>
          <li className="nav-item"><Link to="/addTodo" className='nav-link text-white' >Add Todo</Link></li>
          <li className="nav-item"><Link to="/user" className='nav-link text-white' >Users</Link></li>
       
          <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">Auth</button>
                                <ul className="dropdown-menu">
                                    <li><Link to="/Auth/Login" className="dropdown-item">Login</Link></li>
                                    <li><Link to="/Auth/Register" className="dropdown-item">Register</Link></li>
                                    <li><Link to="/Auth/Forgot" className="dropdown-item">Forgot Password</Link></li>
                                    <li><Link to="/Auth/Update" className="dropdown-item">Update Password</Link></li>
                </ul>
            </li>
         
        </ul>
      
      </div>
    </div>
  </nav>

  </header>
  )
}
