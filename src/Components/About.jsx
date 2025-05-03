import React from 'react'
import Footer from './Footer'

function About() {
  return (
    <>
    <div className="container-fluid weddingbanner">
        <img src="/images/aboutbanner.png" className='img-fluid' alt="" />
    </div>
    <div className="container mx-auto">
        <h4 className='text-center mt-4 fw-bold'>Welcome To Prakan Photo Studio - Where Every Shot Tells A Story</h4>
        <p className='fs-5 mt-4 mb-3'>At Prakan Photo Studio, We Believe That Every Photograph Is A Beautiful Story Frozen In Time. Established With A Passion For Photography And A Commitment To Excellence, Our Studio Has Become A Trusted Name For Capturing Life's Most Precious Moments With Creativity, Precision, And Heart.
        <br/>From Joyful Weddings And Vibrant Birthdays To Professional Portraits And Corporate Events, We Bring A Fresh Perspective And Artistic Flair To Every Frame. Our Goal Is Simple - To Turn Your Real-Life Moments Into Timeless Memories You Can Treasure Forever.</p>
        <h1 className='fs-5 mt-3 mb-1'>Why Choose Us?</h1>
        <h2 className='fs-5 mt-3 mb-1'>📸Creative Vision</h2>
        <p className='ps-4'>
            We don't just take pictures — we create art. Every photo is carefully composed with attention to
            lighting, angles, and emotion.
        </p>

        <h2 className='fs-5 mt-3 mb-1'>🎯Customized Services</h2>
        <p className='ps-4'>
            Every client is unique. That's why we offer personalized packages that suit your needs, style, and
            budget.
        </p>

        <h2 className='fs-5 mt-3 mb-1'> 🎥Modern Equipment</h2>
        <p className='ps-4'>
            Our studio is equipped with the latest cameras, lighting systems, and editing tools to ensure
            top-notch quality in every project.
        </p>

        <h2 className='fs-5 mt-3 mb-1'>🤝Friendly &amp; Professional Team</h2>
        <p className='ps-4'>
            We're not just photographers — we're memory makers! Our team is passionate, approachable, and
            always ready to make your photoshoot experience fun and stress-free.
        </p>

        <h2 className='fs-5 mt-3 mb-1'>🎞️Full-Service Studio</h2>
        <p className='ps-4'>
            From pre-shoot planning to post-production editing, we handle everything under one roof to
            deliver seamless results.
        </p>

        <h2 className='fs-5 mt-3 mb-1'>Our Services</h2>
        <ul className='ps-4'>
            <li>Wedding Photography &amp; Videography</li>
            <li>Pre-Wedding &amp; Couple Shoots</li>
            <li>Portrait &amp; Fashion Photography</li>
            <li>Baby &amp; Family Sessions</li>
            <li>Albums &amp; Prints</li>
        </ul>

        <h2 className='fs-5 mt-3 mb-1'>Let's Make Magic Together</h2>
        <p className='ps-4'>
            At Prakan Photo Studio, we don't just click pictures — we capture emotions, laughter, connections,
            and milestones. Whether it's a big celebration or a quiet moment, we're here to freeze it
            beautifully in time.
        </p>
        <p className='ps-4'>
            Book your session today and let us turn your moments into memories that last a lifetime.
        </p>
    </div>
    <Footer/>
    </>
  )
}   

export default About
