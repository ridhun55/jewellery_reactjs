import React from 'react'

const Section_2 = (props) => {
   return (
      <>
         <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
                  <img className="card-img-top mb-2" src={props.img} alt=""/>
                  <div className="card-body text-center">
                     <h4 className="card-title" style={{marginBottom:'0px',paddingBottom:'0px'}}>{props.title}</h4>
                  </div>
                  <div className="card-footer bg-transparent py-2 px-5">
                     <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right"><strong>Price</strong></div>
                        <div className="col-6 py-1">Rs. {props.price}/-</div>
                     </div>
                     <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right"><strong>Offer</strong></div>
                        <div className="col-6 py-1">Rs. {props.Offer}</div>
                     </div>
                     <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right"><strong>Category</strong></div>
                        <div className="col-6 py-1">{props.category}</div>
                     </div>
                  </div>
            </div>
         </div>
      </>
   )
}

export default Section_2
