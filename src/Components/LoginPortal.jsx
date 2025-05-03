import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import useForm from '../Hooks/useForm';
import { Form } from 'react-bootstrap';

function LoginPortal({val,close}) {
    const navi = useNavigate();
    const loginDiv = document.getElementById('loginportal');
    const {loginvalues,loginerr,loginValidation,validateLogin,setLoginerr} = useForm();

    const  [loginshow,setloginshow] = useState(false)
    useEffect(()=>{
        localStorage.setItem("login",loginshow)
      },[loginshow])
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validateLogin()){
          const user = JSON.parse(localStorage.getItem('register'));
          const userfind = user.find(u=>u.email===loginvalues.email&&u.password===loginvalues.password)
          console.log(userfind);
          if(userfind){
            navi("/");
            location.reload()
            setloginshow(true)
            localStorage.setItem('user',JSON.stringify(userfind))
          }
          else{
            setLoginerr({...loginerr,loginer : "Invalid Password"})
          }
        }
      }
  return ReactDOM.createPortal(
    <>
     <div className="container">
        <div className="login-container">
            <button className='btn btn-close d-block ms-auto' onClick={close}></button>
            <h4 className="mb-4 text-center">Login into your Account</h4>
            
            <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Form.Control type="text" className="form-control" name='email' placeholder="Email" value={loginvalues.email} onChange={(e)=>loginValidation(e)}/>
                    {loginerr.email && <p style={{ color: 'red' }}>{loginerr.email}</p>}
                </div>
                
                <div className="mb-3">
                    <Form.Control  type="password" className="form-control" name='password' placeholder="Password" value={loginvalues.password} onChange={(e)=>loginValidation(e)}/>
                    {loginerr.password && <p style={{ color: 'red' }}>{loginerr.password}</p>}
                    {loginerr.loginer && <p style={{ color: 'red' }}>{loginerr.loginer}</p>}
                </div>
                
                <div className="d-flex justify-content-between mb-4">
                    <div className="form-check">
                        <Form.Control  type="checkbox" className="form-check-input" id="remember"/>
                        <label className="form-check-label">Remember me</label>
                    </div>
                </div>
                
                <button type="submit" className="btn btn-login text-white w-100 mb-3">Login</button>
                
                <div className="text-center">
                    <span className="text-muted">Don't have an account? </span>
                    <Link to="/register" className="register-link" onClick={close}>Register Now</Link>
                </div>
            </Form>
        </div>
    </div>
    </>,loginDiv
  )
}

export default LoginPortal