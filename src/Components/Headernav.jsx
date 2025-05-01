import React from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import logo from '../assets/images/LOGO,ILLUS AND ICONS/logo.png'
import { Link } from 'react-router-dom'

function Headernav() {
  return (
  <>
     <Navbar expand="lg" className="navborder px-1 py-2 z-3 bg-light" fixed='top'>
      <Container fluid>
      <Link to="/"><Navbar.Brand>
            <img
              src={logo}
              className="img-fluid d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Link to="/wedding" className='navitems text-dark fs-5 fw-bolder px-0 px-lg-3 ps-xl-5 pe-xl-5 ms-0 ms-xl-5 text-center' style={{textDecoration:"none"}}>WEDDING</Link>
            <Link to="/kids" className='navitems text-dark fs-5 fw-bolder px-0 px-xl-5 px-lg-2 text-center' style={{textDecoration:"none"}}>KIDS</Link>
            <Link to="/photography" className='navitems text-dark fs-5 fw-bolder px-0 px-xl-5 px-lg-2 text-center' style={{textDecoration:"none"}}>PHOTOGRAPHY</Link>
            <Link to="/packages" className='navitems text-dark fs-5 fw-bolder px-0 px-xl-5 px-lg-2 text-center' style={{textDecoration:"none"}}>PACKAGES</Link>
            <Link to="/contact" className='navitems text-dark fs-5 fw-bolder px-0 ps-xl-5 px-lg-2 text-center' style={{textDecoration:"none"}}>CONTACT US</Link>
            <Button className='btn loginbtns d-lg-none d-block mx-auto'>LOGIN</Button>
          </Nav>
        </Navbar.Collapse>
        <Button className='btn loginbtn d-none d-lg-block'>LOGIN</Button>
      </Container>
    </Navbar>
  </>  
)
}

export default Headernav