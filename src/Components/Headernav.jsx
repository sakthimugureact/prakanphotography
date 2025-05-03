import React, { useEffect, useState } from 'react'
import {Navbar,Container,Nav, Button} from 'react-bootstrap'
import logo from '../assets/images/LOGO,ILLUS AND ICONS/logo.png'
import { Link } from 'react-router-dom'
import LoginPortal from './LoginPortal'

function Headernav() {
  const [show,setShow] = useState(false)

  const [log,setLog] = useState();
  console.log(log);
  
  const [user,setUser] = useState("");
 
  
  useEffect(()=>{
    const logger = JSON.parse(localStorage.getItem('login'));
    setLog(logger);
  },[])

  useEffect(()=>{
    if(log){
      const users = JSON.parse(localStorage.getItem('user'));
      setUser(users.name)
    }
  },[log])
  
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
          <Nav className="mx-auto">
            <Link to="/wedding" className='navitems text-dark fs-5 fw-bolder px-0 px-lg-3 pe-xl-5 me-xl-3 ms-0  text-center' style={{textDecoration:"none"}}>WEDDING</Link>
            <Link to="/kids" className='navitems text-dark fs-5 fw-bolder px-0 pe-xl-4 px-lg-2 text-center' style={{textDecoration:"none"}}>KIDS</Link>
            <Link to="/photography" className='navitems text-dark fs-5 fw-bolder px-0 px-xl-5 px-lg-2 text-center' style={{textDecoration:"none"}}>PHOTOGRAPHY</Link>
            <Link to="/packages" className='navitems text-dark fs-5 fw-bolder px-0 px-xl-4 px-lg-2 text-center' style={{textDecoration:"none"}}>PACKAGES</Link>
            <Link to="/contact" className='navitems text-dark fs-5 fw-bolder px-0 ps-xl-5 px-lg-2 text-center' style={{textDecoration:"none"}}>CONTACT US</Link>
            {!log&&<Button className='btn loginbtns mx-auto d-lg-none' onClick={()=>setShow(true)}>LOGIN</Button>}
            {log&&<div className='d-block mx-auto'>{log&&<span className='usericons text-center d-lg-none'>{user[0]}</span>}<Button className='btn loginbtns mx-auto  d-lg-none' onClick={()=>setLog(false)}>LOGOUT</Button></div>}
          </Nav>
        </Navbar.Collapse>
        {!log&&<Button className='btn loginbtn d-none d-lg-block' onClick={()=>setShow(true)}>LOGIN</Button>}
        {log&&<>{log&&<span className='usericon  d-none d-lg-block text-center'>{user[0]}</span>}<Button className='logoutbtn d-none d-lg-block' onClick={()=>setLog(false)}>LOGOUT</Button></>}
      </Container>
    </Navbar>
    {show&&<LoginPortal val={show} close={()=>setShow(false)}/>}
  </>  
)
}

export default Headernav