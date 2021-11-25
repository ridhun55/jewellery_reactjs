import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react';

function Footer() {

   const [data, setData] = useState({
      newsletter_name:'',
      newsletter_email:''
   });

   const {newsletter_name, newsletter_email} = data

   const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('https://v1.nocodeapi.com/ridhunsql/google_sheets/LYilSfcHxRVCzIZR?tabId=Sheet1',{
            method: 'POST',
            headers:{
               'content-Type': 'application/json'
            },
            body: JSON.stringify([[newsletter_name, newsletter_email, new Date().toLocaleString()]])
         });
         await response.json();
         setData({...data, newsletter_name:"", newsletter_email:""});
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <>
         <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
            <div className="row pt-5">
                  <div className="col-lg-3 col-md-6 mb-5">
                     <Link to="/" className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0" style={{fontSize: '40px', lineHeight: '40px'}}>
                        <i className="flaticon-043-teddy-bear"></i>
                        <span className="text-white">Juallery</span>
                     </Link>
                     <p>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                     <div className="d-flex justify-content-start mt-4">
                        <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                              style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                              style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                              style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                              style={{width: '38px', height: '38px'}} href="#"><i className="fab fa-instagram"></i></a>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5">
                     <h3 className="text-primary mb-4">Contact Us</h3>
                     <div className="d-flex">
                        <h4 className="fa fa-map-marker-alt text-primary"></h4>
                        <div className="pl-3">
                              <h5 className="text-white">Address</h5>
                              <p>123 Street, New York, USA</p>
                        </div>
                     </div>
                     <div className="d-flex">
                        <h4 className="fa fa-envelope text-primary"></h4>
                        <div className="pl-3">
                              <h5 className="text-white">Email</h5>
                              <p>info@example.com</p>
                        </div>
                     </div>
                     <div className="d-flex">
                        <h4 className="fa fa-phone-alt text-primary"></h4>
                        <div className="pl-3">
                              <h5 className="text-white">Phone</h5>
                              <p>+012 345 67890</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5">
                     <h3 className="text-primary mb-4">Quick Links</h3>
                     <div className="d-flex flex-column justify-content-start">
                        <Link className="text-white mb-2" to="/" target="_top"><i className="fa fa-angle-right mr-2"></i>Home</Link>
                        <Link className="text-white mb-2" to="/about" target="_top"><i className="fa fa-angle-right mr-2"></i>About Us</Link>
                        <Link className="text-white mb-2" to="/gallery" target="_top"><i className="fa fa-angle-right mr-2"></i>Gallery</Link>
                        <Link className="text-white mb-2" to="/contact" target="_top"><i className="fa fa-angle-right mr-2"></i>Contact Us</Link>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6 mb-5">
                     <h3 className="text-primary mb-4">Newsletter</h3>
                     <form onSubmit={handleSubmit}>
                        <div className="form-group">
                           <input name="newsletter_name" value={newsletter_name} onChange={handleChange} type="text" className="form-control border-0 py-4" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                              <input name="newsletter_email" value={newsletter_email} onChange={handleChange} type="email" className="form-control border-0 py-4" placeholder="Your Email" required="required" />
                        </div>
                        <div>
                              <button className="btn btn-primary btn-block border-0 py-3" type="submit">Submit Now</button>
                        </div>
                     </form>
                  </div>
            </div>
            <div className="container-fluid pt-5" style={{borderTop: '1px solid rgba(23, 162, 184, .2)'}}>
                  <p className="m-0 text-center text-white">
                     &copy; <a className="text-primary font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
                     by
                     <a className="text-primary font-weight-bold" href="#"> Ridhun</a>
                  </p>
            </div>
         </div>
      </>
   )
}

export default Footer
