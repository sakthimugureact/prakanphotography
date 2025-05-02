import React from 'react'
import ReactDOM from 'react-dom'
function WedsPortal({value,close}) {
    const wedsDiv = document.getElementById('wedsportal');
  return ReactDOM.createPortal(
    <div className='bgg'>
    <div className="container-fluid fullgal mx-auto" style={modalStyle}>
    <button className='btn btn-close closebtn d-block ms-auto' onClick={close}></button>
        <img
          src={value} className='img-fluid'/>
      </div>
    </div>,wedsDiv
  )
}

const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
  };

export default WedsPortal