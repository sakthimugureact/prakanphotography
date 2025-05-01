import React from 'react'
import Footer from '../Components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import useForm from '../Hooks/useForm'

function Payment() {
    const navi = useNavigate()
    const {details,detailValidation,validateDetails,error} = useForm()
    const detailSubmit = (e) => {    
        e.preventDefault();
        if(validateDetails()){
            navi('/success')
            localStorage.setItem('payment',JSON.stringify(details))
        }
    }
  return (
    <>
      <div className="container payment-container weddingbanner mx-auto pt-5">
        <h4 className="payment-title">SECURE YOUR BOOKING WITH AN ADVANCE PAYMENT</h4>
        <p className="payment-subtitle">Please Complete Your Advance Payment To Confirm Your Booking With Prakan Photo Studio. Your Session Will Be Reserved Only After Successful Payment. If You Have Any Questions, Feel Free To Contact Us.</p>
        
        <h5 className="payment-section-title">Payment Details</h5>
        <Form onSubmit={detailSubmit}>
            <div className="row">
                <div className="col-md-4 d-flex align-items-center">
                    <label className="form-label mb-0">Name:</label>
                </div>
                <div className="col-md-8">
                    <Form.Control type="text"  name="userName" value={details.userName} onChange={detailValidation} style={{borderColor:"#e93a9d"}}/>
                    {error.userName && <p style={{ color: 'red' }}>{error.userName}</p>}  
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-md-4 d-flex align-items-center">
                    <label className="form-label mb-0">Booking Date:</label>
                </div>
                <div className="col-md-8">
                    <Form.Control  type="date" name="bookingDate" value={details.bookingDate} onChange={detailValidation} style={{borderColor:"#e93a9d"}}></Form.Control>   
                    {error.bookingDate && <p style={{ color: 'red' }}>{error.bookingDate}</p>}
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-md-4 d-flex align-items-center">
                    <label className="form-label mb-0">Service Type:</label>
                </div>
                <div className="col-md-8">
                    <Form.Control  type="text" name="service" value={details.service} onChange={detailValidation} style={{borderColor:"#e93a9d"}} />
                    {error.service && <p style={{ color: 'red' }}>{error.service}</p>}  
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-md-4 d-flex align-items-center">
                    <label className="form-label mb-0">Amount To Pay:</label>
                </div>
                <div className="col-md-8">
                    <Form.Control  type="number" name="amount" value={details.amount} onChange={detailValidation} style={{borderColor:"#e93a9d"}}/>
                    {error.amount && <p style={{ color: 'red' }}>{error.amount}</p>}  
                </div>
            </div>
            
            <h5 className="payment-section-title">Payment Methods</h5>
            
            <div className="payment-method">
                <div className="form-check">
                    <Form.Control  className="form-check-input mt-1 mx-1" required type="radio" name="paymentMethod" id="creditCard" />
                    <label className="form-check-label">
                        <img src="/images/image.png" alt="" /> Credit/Debit Card
                    </label>
                </div>
            </div>
            
            <div className="payment-method">
                <div className="form-check" required>
                    <input className="form-check-input mt-1 mx-1" type="radio" name="paymentMethod" id="upi" />
                    <label className="form-check-label">
                    <img src="/images/image 8.png" alt="" />  UPI (Google Pay / PhonePe / Paytm)
                    </label>
                </div>
            </div>
            
            <div className="payment-method">
                <div className="form-check">
                    <input className="form-check-input mt-1 mx-1" type="radio" name="paymentMethod" id="netBanking" />
                    <label className="form-check-label">
                    <img src="/images/image 9.png" alt="" />  Net Banking
                    </label>
                </div>
            </div>
            
            <div className="payment-method">
                <div className="form-check">
                    <input className="form-check-input mt-1 mx-1" type="radio" name="paymentMethod" id="cashStudio" />
                    <label className="form-check-label">
                    <img src="/images/Vector.png" alt="" />  Cash At Studio
                    </label>
                </div>
            </div>
            
            <h5 className="payment-section-title">Terms Note</h5>
            <p className="payment-terms">
                "Advance Payment is Non-Refundable In Case Of Cancellation. Rescheduling Is Allowed If Informed At Least 48 Hours Before The Session."
            </p>
            
            <div className="text-center">
                <button type="submit" className="btn btn-primary confirm-btn mb-5">Confirm Payment</button>
            </div>
        </Form>
    </div>
    <Footer/>
    </>
  )
}

export default Payment