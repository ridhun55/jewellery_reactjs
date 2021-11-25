import React from 'react'

const Gallery_card = (props) => {
   return (
      <>
         <div className="col-lg-4 mb-0">
            <div className="card border-0 bg-light shadow-sm pb-0">
               <img style={{background: '#eee',  boxShadow: '4px 8px 8px -4px lightblue'}} className="card-img-top" src={props.img} alt=""/>
               <div className="card-body text-center">
                  <h4 className="card-title" style={{marginBottom:'0px',paddingBottom:'0px'}}>{props.title}</h4>
               </div>
            </div>
         </div>
      </>
   )
}

export default Gallery_card
