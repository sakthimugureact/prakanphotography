import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer className="py-5 footer mt-5">
        <div className="container mx-auto py-2 py-lg-4">
            <div className="row">
                <div className="col-12 col-md-4 footer-column">
                    <img src="/images/logo.png" alt="Prakan Studio Photography" className="footer-logo" />
                    <p className="text-white fw-bold fs-5 text-start ps-3 fotcom">PRAKAN STUDIO<br/> PHOTOGRAPHY</p>
                </div>
                <div className="col-12 col-md-4 footer-column">
                    <h3 className='text-white fw-bold fs-4 foothead'>Quick Links</h3>
                    <ul className='mt-3 row'>
                        <Link className='text-light text-decoration-none fs-5 fw-bold footcontent' to='/'>Home</Link>
                        <Link className='text-light text-decoration-none fs-5 fw-bold footcontent' to='/about'>About US</Link>
                        <Link className='text-light text-decoration-none fs-5 fw-bold footcontent' to='/privacy'>Privacy Policy</Link>
                        <Link className='text-light text-decoration-none fs-5 fw-bold footcontent' to='/terms'>Terms and Conditions</Link>
                       
                    </ul>
                </div>
                <div className="col-12 col-md-4 footer-column">
                    <h3  className='text-white fw-bold fs-4 text-center mb-3 foothead'>Contact</h3>
                    <p className='text-light text-decoration-none fs-5 fw-bold text-center footcontent'><img src="/images/phone.png" alt="Phone Icon" className="icon"/> 9874653210 / 9632587410</p>
                    <p className='text-light text-decoration-none fs-5 fw-bold text-center pt-2 footcontent'><img src="/images/email.png" alt="Email Icon" className="icon"/> mailtoprakan@studio.com</p>
                    <p className='text-light text-decoration-none fs-5 fw-bold text-center pt-2 footcontent'><img src="/images/location.png" alt="Location Icon" className="icon"/> Guduvancherry, 603202</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}   

export default Footer