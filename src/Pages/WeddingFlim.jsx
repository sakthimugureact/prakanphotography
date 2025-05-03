import React from 'react'
import Footer from '../Components/Footer'

function WeddingFlim() {
  return (
    <>
    <div className='container mx-auto weddingbanner'>
        <h4 className='text-center fw-bold fs-3 pt-5'>Candid Wedding Film</h4>
        <div className="row">
            <div className="col-md-8">
                <h4 className='pt-4 pb-2 fs-5 fw-bold'>Real Emotions. Unscripted Moments. Everlasting Memories</h4>
                <p  className='fs-5'>At Prakan Photo Studio, Our Candid Video Service Is All About Capturing The Raw, Natural Moments That Truly Define Your Special Day. From Laughter And Happy Tears To Unexpected Hugs And Joyful Glances - We Film The Emotions As They Happen, Without Poses Or Retakes.</p>
                <h4 className='pt-4 pb-2 fs-5 fw-bold'>What You Get</h4>
                <ul className='text-decoration-none' style={{listStyle:"none"}}>
                    <li className='fs-5'>Full HD/4K Quality Videos</li>
                    <li className='fs-5'>Cinematic Edits With Background Music</li>
                    <li className='fs-5'> Highlight Reels (1-3 Minutes)</li>
                    <li className='fs-5'>Full-Length Story Film (10-30 Minutes)</li>
                    <li className='fs-5'>Drone Shots & Slow-Motion (Available On Request)</li>
                    <li className='fs-5'>Delivered Via Online Link Or Pen Drive</li>
                </ul>
            </div>
            <div className="col-md-4 vidoe d-flex align-items-center">
            <div className="embed-responsive">
  <video className="embed-responsive-item" controls autoPlay  style={{width:"100%"}} >
    <source src="/images/video2.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
            </div>
        </div>
    </div>
    <div className="container mx-auto mt-5">
      <div className="row">
        <div className="col-md-6 p-5">
        <div className="embed-responsive embed-responsive-4by3 ">
  <video className="embed-responsive-item" controls  style={{width:"100%"}}>
    <source src="/images/video1.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
        </div>
        <div className="col-md-6 p-5">
        <div className="embed-responsive embed-responsive-4by3 ">
  <video className="embed-responsive-item" controls  style={{width:"100%"}}>
    <source src="/images/v1.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-5">
        <div className="embed-responsive embed-responsive-4by3 ">
  <video className="embed-responsive-item" controls  style={{width:"100%"}}>
    <source src="/images/v4.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
        </div>
        <div className="col-md-6 p-5">
        <div className="embed-responsive embed-responsive-4by3 ">
  <video className="embed-responsive-item" controls  style={{width:"100%"}}>
    <source src="/images/v3.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 p-5">
        <div className="embed-responsive embed-responsive-4by3 ">
  <video className="embed-responsive-item" controls  style={{width:"100%"}}>
    <source src="/images/v4.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
        </div>
        <div className="col-md-6 p-5" >
        <div className="embed-responsive embed-responsive-4by3 ">
  <video className="embed-responsive-item" controls  style={{width:"100%"}}>
    <source src="/images/video2.mp4" type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
</div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default WeddingFlim