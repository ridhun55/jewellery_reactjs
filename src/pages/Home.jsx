import React from 'react'
import Header from '../components/Header'
import Section_1 from '../components/Section_1'
import Section_2 from '../components/Section_2'

const Data = [
   {
     title : 'Rings',
     img : 'images/image_3.jpg',
     price: 1000,
     Offer : '900/-',
     category : 'Rings',
   },
   {
     title : 'Gold Chain',
     img : 'images/image_4.jpg',
     price: 2000,
     Offer : '1900/-',
     category : 'Rings',
   },
   {
     title: 'Gold Chain',
     img : 'images/image_5.jpg',
     price: 3000,
     Offer : '2900/-',
     category : 'Chain',
   },
   {
     title: 'Diamond Chain',
     img : 'images/image_6.jpg',
     price: 4000,
     Offer : '3900/-',
     category : 'Necklace',
   },
 ];

function Home() {
   return (
      <>
         <Header/>
         <Section_1/>
         
         <div ID="Our_Collections" className="container-fluid pt-5">
            <div className="container">
                  <div className="text-center pb-2">
                     <p className="section-title px-5"><span className="px-2">Popular Designs</span></p>
                     <h1 className="mb-4">Our Collections</h1>
                  </div>
                  
                  <div className="row">
                     { Data.map((val) => (
                        <Section_2 title={val.title} img={val.img} price={val.price} Offer={val.Offer} category={val.category} />
                     ))}
                  </div>
                  
            </div>
         </div> 
      </>
   )
}

export default Home
