import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

function Bridal() {
  return (
    <>
    <div className="container mx-auto">
    <p className='mt-5 fs-5 fw-semibold'>We Value Everything That Our Clients Stand For, And We Take Pride In The Fact That We Are Trusted By Our Client Time And Again For Their Wedding Photography. We Are Acclaimed In Candid Wedding Photography As We Would Even Climb A Mountain To Make Our Clients Happy. And If You Are Still Reading This, Our Team Of Expert Wedding Photographers Is Looking Forward To A Happy And Productive Collaboration With You!</p>
    </div>  
    
    <div className="gallery-container container mx-auto mt-5">
    <div className="gallery-grid">
            <div className="gallery-item tall">
                <img src='/images/BRIDAL/image.png' alt="Bride in yellow saree" className='img-fluid'></img>
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-4.png' alt="Bride portrait" className='img-fluid' />
            </div>
            <div className="gallery-item tall">
                <img src='/images/BRIDAL/image-2.png' alt="Bride in pink attire" className='img-fluid' />
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-5.png' alt="Bride getting ready" className='img-fluid' />
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-1.png' alt="Traditional bride" className='img-fluid' />
            </div>
            <div className="gallery-item tall">
                <img src='/images/BRIDAL/image-11.png' alt="Bride in red" className='img-fluid' />
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-3.png' alt="Bride in blue saree" className='img-fluid' />
            </div>
            <div className="gallery-item tall">
                <img src='/images/BRIDAL/image-14.png' alt="Candid bride shot" className='img-fluid' />
            </div>
            <div className="gallery-item tall">
                <img src='/images/BRIDAL/image-12.png' alt="Bride in golden attire" className='img-fluid' />
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-6.png' alt="Bridal jewelry" className='img-fluid' />
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-7.png' alt="Traditional look" className='img-fluid' />
            </div>
            <div className="gallery-item tall">
                <img src='/images/BRIDAL/image-13.png' alt="Traditional look" className='img-fluid' />
            </div>
            <div className="gallery-item">
                <img src='/images/BRIDAL/image-9.png' alt="Traditional look" className='img-fluid' />
            </div>
            <div className="gallery-item ">
                <img src='/images/BRIDAL/image-8.png' alt="Bride in blue" className='img-fluid' />
            </div>
            <div className="gallery-item ">
                <img src='/images/BRIDAL/image-10.png' alt="Bride in blue" className='img-fluid' />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Bridal