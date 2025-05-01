import React, { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactDOM from "react-dom";

function SubmitPortal({ onClose }) {
   const close = ()=>{
    location.reload()
   }
  const submitdiv = document.getElementById("submitportal");
  return ReactDOM.createPortal(
    <div className="container portaldivs"  style={modalStyle}>
      <div className="d-flex justify-content-center align-items-center mx-auto">
        <Modal.Dialog>
        <button className="btn-close d-block ms-auto mt-3 pe-3" onClick={close}></button>
          <Modal.Header className="justify-content-center">
            <Modal.Title className="fs-3 text-center">Thank You For Reaching Out! </Modal.Title>
            
          </Modal.Header>

          <Modal.Body className="text-center">
            <p>
              Hi There! 👋
            </p>
            <p> We've Received Your Enquiry And Truly Appreciate
            Your Interest In Prakan Photo Studio.</p>
            <p>
            Email kart Our Team Will Get Back
            To You Within 24 Hours With All The Details You Need.
            </p>
            <img src="/images/success.png" className="img-fluid"></img>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    </div>,
    submitdiv
  );
}

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "white",
  padding: "20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
  zIndex: 1000,
};

export default SubmitPortal;
