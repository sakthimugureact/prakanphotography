import React from 'react'
import Footer from './Footer'

function Privacy() {
  return (
    <>
    <div className="container mx-auto weddingbanner">
        <h5 className='text-center fw-bold pt-3 fs-3'>Privacy Policy</h5>
        <p className='fs-6 pt-4'>At Prakan Photo Studio, Your Privacy Is Important To Us. This Privacy Policy Explains How We Collect, Use, And Protect Your Personal Information When You Visit Our Website, Book Our Services, Or Interact With Us In Any Way.</p>

        <h2  className='fs-5 mt-3 mb-1'>1. Information We Collect</h2>
        <p className='ps-4'>We May Collect The Following Types Of Information:</p>
        <ul className='ps-4'>
            <li><span class="highlight">Personal Information:</span> Name, Email Address, Phone Number, Address, Event Details, And Other Information You Provide When Booking Our Services.</li>
            <li><span class="highlight">Media Content:</span> Photos And Videos Taken During Your Sessions.</li>
            <li><span class="highlight">Website Usage Information:</span> IP Address, Browser Type, Pages Visited, And Other Technical Data When You Use Our Website.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>2. How We Use Your Information</h2>
        <p className='ps-4'>We Use Your Information To:</p>
        <ul className='ps-4'>
            <li>Process Bookings And Communicate With You.</li>
            <li>Provide Photography And Related Services.</li>
             <li>Share Previews, Albums, Or Digital Downloads.</li>
            <li>Improve Our Website, Services, And Customer Experience.</li>
            <li>Promote Our Work (With Your Permission).</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>3. Sharing Your Information</h2>
        <p className='ps-4'>We Do Not Sell, Rent, Or Trade Your Personal Information. We May Share Your Data Only With:</p>
        <ul className='ps-4'>
            <li>Trusted Third-Party Service Providers (E.G., Album Printers, Online Galleries) To Complete Our Services.</li>
            <li>Legal Authorities If Required By Law Or To Protect Our Rights.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>4. Media Use &amp; Consent</h2>
        <p className='ps-4'>We May Use Selected Images For Our Portfolio, Social Media, Website, Or Promotional Material Only With Your Consent. If You Prefer Your Photos Not To Be Shared Publicly, Please Let Us Know When Booking.</p>

        <h2 className='fs-5 mt-3 mb-1'>5. Data Security</h2>
        <p className='ps-4'>We Take Reasonable Precautions To Protect Your Personal Data From Unauthorized Access, Disclosure, Or Misuse. However, No Online Method Is 100% Secure, So We Cannot Guarantee Absolute Security.</p>

        <h2 className='fs-5 mt-3 mb-1'>6. Your Rights</h2>
        <p className='ps-4'>You Have The Right To:</p>
        <ul className='ps-4'>
            <li>Access Or Correct Your Personal Information.</li>
            <li>Request The Removal Of Your Data Or Photos From Our Systems.</li>
            <li>Withdraw Consent For Promotional Use At Any Time.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>7. Changes To This Policy</h2>
        <p className='ps-4'>We May Update This Privacy Policy Occasionally. Any Changes Will Be Posted On This Page With An Updated Effective Date.</p>
    </div>
    <Footer/>
    </>
  )
}

export default Privacy