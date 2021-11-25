import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
   return (
      <>
           <div class="container-fluid bg-light position-relative shadow">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                  <Link to="/" class="navbar-brand font-weight-bold text-secondary" style={{fontSize: '50px'}}>
                     <i class="flaticon-043-teddy-bear"></i>
                     <span class="text-primary">Juallery</span>
                  </Link>
                  <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                     <div class="navbar-nav font-weight-bold mx-auto py-0">
                        <Link to="/" class="nav-item nav-link active" target="_top">Home</Link>
                        <Link to="/about" class="nav-item nav-link" target="_top">About</Link>
                        <Link to="/gallery" class="nav-item nav-link" target="_top">Gallery</Link>
                        <div class="nav-item dropdown">
                              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                              <div class="dropdown-menu rounded-0 m-0">
                                 <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                 <a href="single.html" class="dropdown-item">Blog Detail</a>
                              </div>
                        </div>
                        <Link to="/contact" class="nav-item nav-link" target="_top">Contact</Link>
                     </div>
                     <Link to="/booking" class="btn btn-primary px-4" target="_top">Booking</Link>
                  </div>
            </nav>
         </div>
      </>
   )
}

export default NavBar
