

import React from 'react'
import 'animate.css';
export default function Navbar() {

  

  return <>

    <nav className="navbar navbar-expand-lg  p-4 ">
      <div className="container">
      <h1 className="animate__animated animate__bounce ">Fake Store</h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className='fab mx-2 fa-facebook me-2'></i>
              <i className='fab mx-2 fa-twitter me-2'></i>
              <i className='fab mx-2 fa-instagram me-2' ></i>
              <i className='fab mx-2 fa-youtube me-2'></i>
              <i className='fab mx-2 fa-tiktok me-2'></i>
            </li>

          </ul>

        </div>
      </div>
    </nav>

  </>
}
