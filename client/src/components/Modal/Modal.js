import React from "react";
import "./Modal.css";



const Modal = ({ handleClose, show, children, handleChange }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (        
    <div className={showHideClassName}>
      {children}
    </div>
  )
}

export default Modal;

