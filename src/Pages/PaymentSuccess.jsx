import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PaymentSuccess() {
    const [det,setDet] = useState();
    console.log(det);
    
    useEffect(()=>{
        const getValue =JSON.parse( localStorage.getItem("payment"))
        setDet(getValue)
    },[])
  return (
    <div className="container success-container weddingbanner mx-auto">
        <h4 className="success-title text-center pt-5">
        ✅Payment Successful!
        </h4>
        
        <p className="success-subtitle text-center pt-3 fs-5">Thank You For Your Payment. Your Booking Is Now Confirmed With Prakan Photo Studio!</p>
        
        <h5 className="section-title fs-3 pt-3 fw-bold">Booking Details</h5>
        <div className="booking-details ps-5">
            {det && <p className='fs-5 pt-1'><strong>Name:</strong> {det.userName}</p>}
            {det && <p className='fs-5 pt-1'><strong>Booking Date:</strong> {det.bookingDate}</p>}
            {det && <p className='fs-5 pt-1'><strong>Service Type:</strong> {det.service}</p>}
            {det &&<p className='fs-5 pt-1'><strong>Amount Paid:</strong> ₹{det.amount}</p>}
            {det &&<p className='fs-5 pt-1'><strong>Transaction ID:</strong> SBI00078HN008</p>}
        </div>
        
        <h5 className="section-title pt-3 fs-4 fw-bold pb-2">What's Next?</h5>
        <p className='fs-6'>Our Team Will Contact You Shortly To Finalize The Session Details. If You Have Any Special Requests Or Reference Images, Feel Free To Share Them With Us Via Email Or WhatsApp.</p>
        
        <h5 className="section-title pt-3 fs-4 fw-bold pb-2">Confirmation Sent</h5>
        <p>A Confirmation Message Has Been Sent To Your Registered Email And Phone Number.</p>
        
        <div className='mt-4'>
            <Link className='text-decoration-none text-dark fw-bold fs-4' to='/'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="26" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
  <path  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>Back To Home</Link>
        </div>
    </div>
  )
}

export default PaymentSuccess