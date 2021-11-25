import React from 'react'
import {useState} from 'react';

const Contact = () => {

   const [data, setData] = useState({
      contact_name:'',
      contact_email:'',
      contact_subject:'',
      contact_message:''
   });

   const {contact_name, contact_email, contact_subject, contact_message} = data

   const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('https://v1.nocodeapi.com/ridhunsql/google_sheets/MhLzWeGdxOoUmRft?tabId=Sheet1',{
            method: 'POST',
            headers:{
               'content-Type': 'application/json'
            },
            body: JSON.stringify([[contact_name, contact_email, contact_subject, contact_message, new Date().toLocaleString()]])
         });
         await response.json();
         setData({...data, contact_name:"", contact_email:"", contact_subject:"", contact_message:""});
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <>
         <div class="container-fluid pt-5">
            <div class="container">
               <div class="text-center pb-2">
                  <p class="section-title px-5"><span class="px-2">Get In Touch</span></p>
                  <h1 class="mb-4">Contact Us For Any Query</h1>
               </div>
               <div class="row">
                  <div class="col-lg-7 my-5">
                     <div class="contact-form">
                           <div id="success"></div>
                           <form onSubmit={handleSubmit}>
                              <div class="control-group">
                                 <input name="contact_name" value={contact_name} onChange={handleChange} type="text" class="form-control" id="name" placeholder="Your Name" data-validation-required-message="Please enter your name"/>
                                 <p class="help-block text-danger"></p>
                              </div>
                              <div class="control-group">
                                 <input name="contact_email" value={contact_email} onChange={handleChange} type="email" class="form-control" id="text" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email / mobile No."/>
                                 <p class="help-block text-danger"></p>
                              </div>
                              <div class="control-group">
                                 <input name="contact_subject" value={contact_subject} onChange={handleChange} type="text" class="form-control" id="subject" placeholder="Subject"  data-validation-required-message="Please enter a subject"/>
                                 <p class="help-block text-danger"></p>
                              </div>
                              <div class="control-group">
                                 <textarea name="contact_message" value={contact_message} onChange={handleChange} class="form-control" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                                 <p class="help-block text-danger"></p>
                              </div>
                              <div>
                                 <button class="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                              </div>
                           </form>
                     </div>
                  </div>
                  <div class="col-lg-5 my-5">
                     <div class="d-flex">
                           <i class="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                           <div class="pl-3">
                              <h5>Address</h5>
                              <p>123 Street, New York, USA</p>
                           </div>
                     </div>
                     <div class="d-flex">
                           <i class="fa fa-envelope d-inline-flex align-items-center justify-content-center text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                           <div class="pl-3">
                              <h5>Email</h5>
                              <p>info@example.com</p>
                           </div>
                     </div>
                     <div class="d-flex">
                           <i class="fa fa-phone-alt d-inline-flex align-items-center justify-content-center text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                           <div class="pl-3">
                              <h5>Phone</h5>
                              <p>+012 345 67890</p>
                           </div>
                     </div>
                     <div class="d-flex">
                           <i class="far fa-clock d-inline-flex align-items-center justify-content-center text-secondary rounded-circle" style={{width: '45px', height: '45px'}}></i>
                           <div class="pl-3">
                              <h5>Opening Hours</h5>
                              <strong>Sunday - Friday:</strong>
                              <p class="m-0">08:00 AM - 05:00 PM </p>
                           </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.5241568391916!2d75.69589811406455!3d11.442043249684955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba689f7c2d9fbed%3A0x36e8cfc7bf9ea2ec!2sKoyilandy%20New%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1637676681113!5m2!1sen!2sin" width="100%" height="500" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
            </div>
         </div>
      </>
   )
}

export default Contact
