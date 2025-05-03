import React from 'react'
import Footer from './Footer'

function Terms() {
  return (
    <>
    <div className="container mx-auto weddingbanner">
        <h6 className='text-center pt-4 fs-5 fw-bold'>Terms and Conditions</h6>
        <h1 className='mt-4 fs-4'>Welcome To Prakan Photo Studio!</h1>
        <p className='fs-6'>By Booking Our Services Or Using Our Website, You Agree To The Following Terms And Conditions. Please Read Them Carefully Before Proceeding.</p>

        <h2 className='fs-5 mt-3 mb-1'>1. Booking &amp; Confirmation</h2>
        <ul className='ps-5'>
            <li>All Bookings Are Confirmed Only Upon Receipt Of A Booking Fee Or Advance Payment.</li>
            <li>Clients Must Provide Accurate Details Such As Date, Time, Venue, And Type Of Event At The Time Of Booking.</li>
            <li>Last Minute Bookings Are Subject To Availability And May Incur Additional Charges.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>2. Payment Terms</h2>
        <ul className='ps-5'>
            <li>A Non-Refundable Advance Is Required To Confirm Your Session Or Event Booking.</li>
            <li>The Remaining Balance Must Be Paid Before Or On The Day Of The Event/Shoot.</li>
            <li>For Studio Shoots Or Printed Products, Full Payment May Be Required Upfront.</li>
            <li>Accepted Payment Methods: Cash, UPI, Bank Transfer, Or Any Other Modes Accepted By Our Studio.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>3. Cancellations &amp; Rescheduling</h2>
        <ul className='ps-5'>
            <li>Cancellations Made More Than 7 Days Before The Shoot Will Be Eligible For Rescheduling (Subject To Availability).</li>
            <li>Cancellations Made Within 7 Days Of The Shoot Are Non-Refundable.</li>
            <li>Rescheduling Requests Must Be Made At Least 48 Hours In Advance.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>4. Client Responsibilities</h2>
        <ul className='ps-5'>
            <li>Please Arrive On Time For Studio Or Outdoor Shoots. Delays May Result In Reduced Session Time.</li>
            <li>Inform Us In Advance Of Any Specific Concepts, Poses, Or Photo Requests.</li>
            <li>Clients Are Responsible For Obtaining Location Permissions, If Needed (E.G., Wedding Halls, Outdoor Locations).</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>5. Copyright &amp; Image Use</h2>
        <ul className='ps-5'>
            <li>Prakan Photo Studio Retains The Copyright Of All Photos And Videos Taken.</li>
            <li>Clients Receive High-Resolution, Edited Images For Personal Use.</li>
            <li>Photos May Be Used By Prakan Photo Studio For Portfolio, Website, And Promotional Purposes With Your Prior Consent.</li>
            <li>Unauthorized Editing, Resale, Or Commercial Use Of Our Images Without Written Permission Is Not Allowed.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>6. Delivery Timeline</h2>
        <ul className='ps-5'>
            <li>Edited Photos Will Be Delivered Within 7-15 Working Days After The Shoot/Event, Depending On The Project.</li>
            <li>Printed Albums, If Included, May Take Additional Time And Will Be Communicated During Booking.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>7. Limitation Of Liability</h2>
        <ul className='ps-5'>
            <li>While We Strive For Perfection, We Are Not Liable For Unforeseen Circumstances Such As Weather Issues, Equipment Failure, Or Late Arrivals That Affect The Shoot.</li>
            <li>In The Rare Event Of Total Equipment Failure Or Loss Of Images, Liability Is Limited To The Return Of All Fees Paid.</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>8. Changes To Terms</h2>
        <p className='ps-5'>We Reserve The Right To Update These Terms At Any Time. Continued Use Of Our Services Implies Acceptance Of The Revised Terms.</p>
    </div>
    <Footer/>
    </>
  )
}

export default Terms