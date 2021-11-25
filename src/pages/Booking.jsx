import React from 'react'
import {useState} from 'react';

const Booking = () => {

   const [data, setData] = useState({
      name:'',
      mobile:'',
      location:'',
      category:''
   });

   const {name, mobile, location, category} = data

   const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value});
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('https://v1.nocodeapi.com/ridhunsql/google_sheets/aJlkLeGgrmGmjkdS?tabId=Sheet1',{
            method: 'POST',
            headers:{
               'content-Type': 'application/json'
            },
            body: JSON.stringify([[name, mobile, location, category, new Date().toLocaleString()]])
         });
         await response.json();
         setData({...data, name:"", mobile:"", location:"", category:""});
      } catch (err) {
         console.log(err)
      }
   }

   return (
      <>
         <div class="container-fluid py-5">
            <div class="container">
                  <div class="row align-items-center">
                     
                     
                     
                     <div class="col-lg-5">
                        <div class="card border-0">
                              <div class="card-header bg-secondary text-center p-4">
                                 <h1 class="text-white m-0">Book Now</h1>
                              </div>
                              <div class="card-body rounded-bottom p-5" style={{backgroundColor: '#17a2b8'}}>
                                 <form onSubmit={handleSubmit}>
                                    <div class="form-group">
                                       <input name="name" value={name} onChange={handleChange} type="text" class="form-control border-0 p-4" placeholder="Your Name"/>
                                    </div>
                                    <div class="form-group">
                                       <input name="mobile" value={mobile} onChange={handleChange} type="text" class="form-control border-0 p-4" placeholder="Your Mobile No." required="required"/>
                                    </div>
                                    <div class="form-group">
                                       <input name="location" value={location} onChange={handleChange} type="text" class="form-control border-0 p-4" placeholder="Your Location"/>
                                    </div>
                                    <div className="form-group">
                                       <select name="category" value={category} onChange={handleChange} type="text" class="custom-select border-0 px-4" style={{height: '47px'}}>
                                          <option selected="">Select a Category</option>
                                          <option value="Ring">Ring</option>
                                          <option value="Earring">Earring</option>
                                          <option value="Pendant">Pendant</option>
                                          <option value="Chain">Chain</option>
                                          <option value="Bangles">Bangles</option>
                                          <option value="Bracelet">Bracelet</option>
                                          <option value="Necklace">Necklace</option>
                                          <option value="Mangalsutra">Mangalsutra</option>
                                          <option value="Nosepin">Nosepin</option>
                                          <option value="Accessories">Accessories</option>
                                          <option value="others">others</option>
                                       </select>
                                    </div>
                                    <div>
                                          <button class="btn btn-secondary btn-block border-0 py-3" type="submit">Book Now</button>
                                    </div>
                                 </form>
                              </div>
                        </div>
                     </div>

                     <div class="col-lg-7 mt-5 mb-lg-0">
                        <p class="section-title pr-5"><span class="pr-2">Book Now</span></p>
                        <h1 class="mb-4">Please provide all your details </h1>
                        <p>Our store manager will call you to confirm your visit and will guide you store address. Please provide all your details</p>
                        <ul class="list-inline m-0">
                              <li class="py-2"><i class="fa fa-check text-success mr-3"></i>Labore eos amet dolor amet diam</li>
                              <li class="py-2"><i class="fa fa-check text-success mr-3"></i>Etsea et sit dolor amet ipsum</li>
                              <li class="py-2"><i class="fa fa-check text-success mr-3"></i>Diam dolor diam elitripsum vero.</li>
                        </ul>
                     </div>


                  </div>
            </div>
         </div>
      </>
   )
}

export default Booking





