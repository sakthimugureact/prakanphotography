import React, { useState } from 'react'
import Footer from '../Components/Footer'
import useForm from '../Hooks/useForm'
import { Form, FormGroup } from 'react-bootstrap';
import SubmitPortal from '../Components/SubmitPortal';

function Contact() {
  
  const [open,setOpen] = useState(false);

  const {formValidation,values,err,validateForm} = useForm();
  const formSubmit = (e) => {
    
    e.preventDefault();
   if(validateForm()){
    setOpen(true)
    let existacc = localStorage.getItem('contact');
    let uploadingData = existacc?JSON.parse(existacc):[];
    uploadingData.push(values)
    localStorage.setItem('contact',JSON.stringify(uploadingData))
   }
  };



  return (
    <>
    <div className="container weddingbanner mx-auto">
      <h1 className='text-center pt-5 fw-bold fs-2'>CONTACT US</h1>
      <h3 className='pt-4 fw-semibold fs-3'>Book Our Services</h3>
      <p className='fs-4 fw-medium pt-3'>Let Us Be The People Who Sketch The Outline And Fill In The Colors For The Beautiful Picture Of Your Love Story On Your Wedding Day. Forget All The Hassle Of Getting Things Coordinated, We Are Here To Make You Look Flawless On Your Special Day With Our Wedding Photography Services.</p>
      <Form className="row g-3 mt-5">
  <div className="col-md-6">
    <Form.Label className="text-dark fs-5 fw-semibold">Bride/Groom Name</Form.Label>
    <Form.Control type="text" className=" p-3 mt-2 impform" id="inputName" name='user' value={values.user}  onChange={(e)=>formValidation(e)} />
    {err.user && <p style={{ color: 'red' }}>{err.user}</p>}  
  </div>
  <div className="col-md-6">
    <Form.Label  className="text-dark fs-5 fw-semibold">Phone</Form.Label>
    <Form.Control type="tel" className="p-3 mt-2 impform" id="inputPhone" name='phone' value={values.phone}  onChange={(e)=>formValidation(e)} />
    {err.phone && <p style={{ color: 'red' }}>{err.phone}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Email</Form.Label>
    <Form.Control type="email" className="p-3 mt-2 impform" id="inputEmail" name='email' value={values.email}  onChange={(e)=>formValidation(e)} />
    {err.email && <p style={{ color: 'red' }}>{err.email}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">City</Form.Label>
    <Form.Control type="text" className="p-3 mt-2 impform" id="inputCity" name='city'  value={values.city}  onChange={(e)=>formValidation(e)} />
    {err.city && <p style={{ color: 'red' }}>{err.city}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Event Type</Form.Label>
    <Form.Control type="text" className="p-3 mt-2 impform" id="inputEvent" name='event'  value={values.event}  onChange={(e)=>formValidation(e)} />
    {err.event && <p style={{ color: 'red' }}>{err.event}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Date</Form.Label>
    <Form.Control type="date" className="p-3 mt-2 impform" id="inputDate" name='date' value={values.date}  onChange={(e)=>formValidation(e)} />
    {err.date && <p style={{ color: 'red' }}>{err.date}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Location</Form.Label>
    <Form.Control type="text" className="p-3 mt-2 impform" id="inputLocation" name='location'  value={values.location}  onChange={(e)=>formValidation(e)} />
    {err.location && <p style={{ color: 'red' }}>{err.location}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Venue</Form.Label>
    <Form.Control type="text" className="p-3 mt-2 impform" id="inputVenue" name='venue'  value={values.venue} onChange={(e)=>formValidation(e)} />
    {err.venue && <p style={{ color: 'red' }}>{err.venue}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Time</Form.Label>
    <Form.Control type="time" className="p-3 mt-2 impform" id="inputTime" name='time'  value={values.time}  onChange={(e)=>formValidation(e)} />
    {err.time && <p style={{ color: 'red' }}>{err.time}</p>}  
  </div>
  <div className="col-md-6 mt-4">
    <Form.Label className="text-dark fs-5 fw-semibold">Crowd Strength</Form.Label>
    <Form.Control type="text" className="p-3 mt-2 impform" id="inputCrowd" name='crowd' value={values.crowd}  onChange={(e)=>formValidation(e)} />
    {err.crowd && <p style={{ color: 'red' }}>{err.crowd}</p>}  
  </div>
  <div className="col-12 mt-4">
    <Form.Label className=" text-dark fs-5 fw-semibold">Message</Form.Label>
    <Form.Control className='impforms'  onChange={(e)=>formValidation(e)} name='message' value={values.message} ></Form.Control>
    {err.message && <p style={{ color: 'red' }}>{err.message}</p>}  
  </div>
  <button type='submit' onClick={formSubmit} className='subbtn'>Submit</button>
</Form>
    </div>
    <Footer/>
    {open&&<SubmitPortal onClose={()=>setOpen(false)}/>}
    </>
  )
}

export default Contact