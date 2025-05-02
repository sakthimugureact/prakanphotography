import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { NavLink,Outlet } from 'react-router-dom'
import All from './All'

function Photography() {
  return (
    <>
    <div className="container-fluid weddingbanner ">
      <img src="/images/image3.png" className='img-fluid w-100' alt="" />
      <Navbar expand="sm" className="mt-5 bridar">
      <Container className='mx-auto'>
          <Nav className="mx-auto fs-5  text-center">
            <NavLink to="all"  style={({ isActive }) => ({
                    color: isActive ? "#ec4899" : "black"})} className='px-3 fw-bold bro'>All</NavLink>
            <NavLink to="bridal" style={({ isActive }) => ({
                    color: isActive ? "#ec4899" : "black"})} className='pe-md-3 fw-bold bro'>Bridal Portraits</NavLink>
            <NavLink to="couple" style={({ isActive }) => ({
                    color: isActive ? "#ec4899" : "black"})} className='pe-md-3  fw-bold bro'>Couple Portraits</NavLink>
            <NavLink to="groom" style={({ isActive }) => ({
                    color: isActive ? "#ec4899" : "black"})} className='pe-0 pe-md-3 fw-bold bro'>Groom Portraits</NavLink>
            <NavLink to="candid" style={({ isActive }) => ({
                    color: isActive ? "#ec4899" : "black"})} className='fw-bold bro'>Candid Moments</NavLink>
            </Nav>
      </Container>
    </Navbar> 
    <Outlet/>
    <All/>
    </div>
    </>
  )
}

export default Photography