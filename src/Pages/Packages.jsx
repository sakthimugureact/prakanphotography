import React from 'react'
import Footer from '../Components/Footer'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Packages() {
  return (
    <>
    <div className='weddingbanner'>
    <img src="/images/packagebanner.png" className='w-100'/>
    </div>
    <div className="container-fluid  mx-auto p-2 p-md-0">
    <h3 className='text-center fw-bold mt-5'>Capture Moments That Last a Lifetime</h3>
    <p className='text-center fs-4 mt-4 fw-semibold'>At Prakan Photo Studio, we offer thoughtfully designed packages to suit every occasion <br/> and budget. Whether it's a casual shoot or a grand celebration, we've got you covered.</p>
    <div className="row mt-5 d-flex gap-xl-4">
      <div className="col-md-3  pack mx-auto">
      <Card className="cards" style={{borderRadius:"0"}}>
      <Card.Header className='text-center p-4' style={{background:"#e93a9d",borderRadius:"0"}}>
        <h1 className='fs-1 fw-bold fst-italic text-light'>BASIC</h1>
        <h3 className='fs-4 fw-bold fst-italic text-light'>PER EVENT</h3>
      </Card.Header>
      <Card.Body className=''>
        <Card.Title className='text-center pt-4 fs-3 fw-bold' style={{color:"#e93a9d"}}>Starts from ₹40000.</Card.Title>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/camera2.png' className='img-fluid pe-3'></img> One Regular Photographer</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/video2.png' className='img-fluid pe-3'></img>One Regular Videographer</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/album.png' className='img-fluid pe-3'></img>One Premium Album Of 50 Pages</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/material.png' className='img-fluid pe-3'></img>Single Type,Regular Sheet.Non-Tearable And Waterproof Album</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/eventvideo.png' className='img-fluid pe-3'></img>Full HD Event Video</Card.Text>  
      </Card.Body>
      <Link to="/payment" className='text-decoration-none'><Button className='bookbtn px-4 py-2 fw-bold fs-5 d-block mx-auto my-4' style={{background:"#e93a9d",outline:"none",border:"none"}}>BOOK NOW</Button></Link>
    </Card>
      </div>

      <div className="col-md-3 pack mx-auto">
      <Card className="cards"  style={{borderRadius:"0"}}>
      <Card.Header className='text-center p-4' style={{background:"#e93a9d",borderRadius:"0"}}>
        <h1 className='fs-1 fw-bold fst-italic text-light'>STANDARD</h1>
        <h3 className='fs-4 fw-bold fst-italic text-light'>PER EVENT</h3>
      </Card.Header>
      <Card.Body className=''>
        <Card.Title className='text-center pt-4 fs-3 fw-bold' style={{color:"#e93a9d"}}>Starts from ₹55000.</Card.Title>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/camera2.png' className='img-fluid pe-3'></img> One Regular Photographer</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/video2.png' className='img-fluid pe-3'></img>One Regular Videographer</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/album.png' className='img-fluid pe-3'></img>One Premium Album Of 50 Pages</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/material.png' className='img-fluid pe-3'></img>Single Type,Regular Sheet.Non-Tearable And Waterproof Album</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/eventvideo.png' className='img-fluid pe-3'></img>Full HD Event Video</Card.Text>
        <Card.Text className='fs-5 fw-semibold cardtitle ps-4 py-3'><img src='/images/replica.png' className='img-fluid pe-3'></img>1 Replica Mini Album,<br/>1 Table Top Calendar & 1 Photoframe</Card.Text>
      </Card.Body>
      <Link to="/payment" className='text-decoration-none'><Button className='bookbtn px-4 py-2 fw-bold fs-5 d-block mx-auto my-4' style={{background:"#e93a9d",outline:"none",border:"none"}}>BOOK NOW</Button></Link>
    </Card>
      </div>

      <div className="col-md-3 pack mx-auto">
      <Card className="cards" style={{borderRadius:"0"}}>
      <Card.Header className='text-center p-4' style={{background:"#e93a9d",borderRadius:"0"}}>
        <h1 className='fs-1 fw-bold fst-italic text-light'>PREMIUM</h1>
        <h3 className='fs-4 fw-bold fst-italic text-light'>PER EVENT</h3>
      </Card.Header>
      <Card.Body className=''>
        <Card.Title className='text-center pt-4 fs-3 fw-bold' style={{color:"#e93a9d"}}>Starts from ₹85000.</Card.Title>
        <Card.Text className='fs-5 fw-semibold ps-4 cardtitle py-3'><img src='/images/camera2.png' className='img-fluid pe-3'></img> One Regular Photographer</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 cardtitle py-3'><img src='/images/video2.png' className='img-fluid pe-3'></img>One Regular Videographer</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/album.png' className='img-fluid pe-3'></img>One Premium Album Of 50 Pages</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/material.png' className='img-fluid pe-3'></img>Single Type,Regular Sheet.Non-Tearable And Waterproof Album</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/eventvideo.png' className='img-fluid pe-3'></img>Full HD Event Video</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/replica.png' className='img-fluid pe-3'></img>1 Replica Mini Album,<br/>1 Table Top Calendar & 1 Photoframe</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/teaser.png' className='img-fluid pe-3'></img>Pre Or Post Outdoor Photoshoot</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/replica.png' className='img-fluid pe-3'></img>60 Seconds Video Teaser</Card.Text>
        <Card.Text className='fs-5 fw-semibold ps-4 py-3 cardtitle'><img src='/images/video.png' className='img-fluid pe-3'></img>Full HD Candid Highlights Video</Card.Text>
      </Card.Body>
      <Link to="/payment" className='text-decoration-none'><Button className='bookbtn px-4 py-2 fw-bold fs-5 d-block mx-auto my-4' style={{background:"#e93a9d",outline:"none",border:"none"}}>BOOK NOW</Button></Link>
    </Card>
      </div>
    </div>

  
    </div>
    <Footer/>
    </>
  )
}

export default Packages