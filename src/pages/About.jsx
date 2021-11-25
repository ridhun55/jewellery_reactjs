import React from 'react'

const About = () => {
   return (
      <>
         <div className="container-fluid py-5">
            <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-5">
                        <img className="img-fluid rounded mb-5 mb-lg-0" src={process.env.PUBLIC_URL + 'images/about/company_logo_2.jpg'} alt=""/>
                     </div>
                     <div className="col-lg-7">
                        <p className="section-title pr-5"><span className="pr-2">Learn About Us</span></p>
                        <h1 className="mb-4">About Us</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="row pt-2 pb-4">
                           <div className="col-6 col-md-8">
                              <ul className="list-inline m-0">
                                 <li className="py-2 border-top border-bottom"><i className="fa fa-check text-primary mr-3"></i>916 Pure Gold.</li>
                                 <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Low Maintenance Charge.</li>
                                 <li className="py-2 border-bottom"><i className="fa fa-check text-primary mr-3"></i>Special Offer Rates.</li>
                              </ul>
                           </div>
                        </div>
                        <a href="" className="btn btn-primary mt-2 py-2 px-4">Learn More</a>
                     </div>
                  </div>
            </div>
         </div>
      </>
   )
}

export default About
