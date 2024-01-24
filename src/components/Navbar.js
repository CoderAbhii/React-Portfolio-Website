import React from 'react'
import { Link } from "react-router-dom";
import "./Css/Nav.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body shadow p-3 mb-5 sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5 fw-bolder fs-3" to="/">CodeWithAbhii</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
