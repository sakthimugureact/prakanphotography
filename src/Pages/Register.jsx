import React, { useState } from 'react'
import Footer from '../Components/Footer'
import useForm from '../Hooks/useForm'
import { Link } from 'react-router-dom';
import LoginPortal from '../Components/LoginPortal';

function Register() {
    const {reg,regerr,registerVaidation,validateRegister} = useForm();
    const [checkbtt,setCheckbtt] = useState(false);
    const [show,setShow] = useState(false);
    console.log(checkbtt);
    
    const clickCheck = () =>{
        if(checkbtt){
            setCheckbtt(false)
        }
        else{
            setCheckbtt(true)
        }
    }


    const handleSubmit = (e) =>{
    e.preventDefault();
    if(validateRegister()){
     let existacc = localStorage.getItem('register');
     let uploadingData = existacc?JSON.parse(existacc):[];
      if(uploadingData.some(users=>users.email===reg.email)){
       alert("Email Already Registerd")
      }
      else{
        uploadingData.push(reg)
        localStorage.setItem('register',JSON.stringify(uploadingData))
        setShow(true)
      }
    }
    }
  return (
    <>
    {!show&&<div className="container registers mx-auto">
        <div className="signup-container">
            <button className='btn btn-close d-block ms-auto'></button>
            <h4 className="mb-4 text-center">Create an Account</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control"  placeholder="Full Name" name='name' value={reg.name} onChange={(e)=>registerVaidation(e)} />
                {regerr.name && <p style={{ color: 'red' }}>{regerr.name}</p>}  
                <input type="text" className="form-control" placeholder="Enter Email" name='email' value={reg.email} onChange={(e)=>registerVaidation(e)}/>
                {regerr.email && <p style={{ color: 'red' }}>{regerr.email}</p>}
                <input type="password" className="form-control" placeholder="Password" name='password' value={reg.password} onChange={(e)=>registerVaidation(e)}/>
                {regerr.password && <p style={{ color: 'red' }}>{regerr.password}</p>}
                <input type="password" className="form-control" placeholder="Confirm Password" name='cmpass' value={reg.cmpass} onChange={(e)=>registerVaidation(e)}/>
                {regerr.cmpass && <p style={{ color: 'red' }}>{regerr.cmpass}</p>}
          
                        <input type="checkbox" className="" id="terms" defaultChecked={checkbtt} onClick={()=>clickCheck()}/>
                        <label className="form-check-label">
                            By signing up you agree to our terms and conditions.
                        </label>
          
                
                <button type="submit" disabled={!checkbtt} className="btn-signup text-white w-100 mb-3">Create an Account</button>
                
                <div className="text-center">
                    <span className="text-muted">Already have an account? </span>
                    <h6 className="login-link" onClick={()=>setShow(true)} style={{cursor:"pointer"}}>Log In</h6>
                </div>
            </form>
        </div>
    </div>}
    {show&&<LoginPortal close={()=>{setShow(false)}}></LoginPortal>}
   {!show&&<Footer/>}
    </>
  )
}

export default Register