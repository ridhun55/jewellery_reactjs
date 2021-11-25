import React from 'react'
import Gallery_card from '../components/Cards/Gallery_card';
import Section_2 from '../components/Section_2'

const GalleryData = [
    {
      id : 1,
      img : 'images/gallery/gallery_1.jpg'
    },
    {
      id : 2,
      img : 'images/gallery/gallery_2.jpg'
    },
    {
      id : 3,
      img : 'images/gallery/gallery_3.webp'
    },
    {
      id : 4,
      img : 'images/gallery/gallery_2.jpg'
    },
  ];

const Gallery = () => {
   return (
      <>
        <div className="container-fluid pt-5 pb-3">
            <div className="container">
                <div className="text-center pb-2">
                    <p className="section-title px-5"><span className="px-2">Our Gallery</span></p>
                    <h1 className="mb-4">Gallery</h1>
                </div>

                <div className="row">
                     { GalleryData.map((val) => (
                        <Gallery_card title={val.title} img={val.img} price={val.price} Offer={val.Offer} category={val.category} />
                     ))}
                  </div>
            </div>
        </div>
      </>
   )
}

export default Gallery
