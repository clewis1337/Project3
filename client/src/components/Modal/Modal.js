import React from "react";
import "./Modal.css";



const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

        
        <button onClick={handleClose}>close</button>
      <form>
        <div className="form">
      <label for="fname">User Name:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="fname">Image:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="fname">Comments:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="fname">Link:</label>
      <input type="text" id="fname" name="fname"></input>
      </div>
      </form>
      </section>
    </div>
  );
};

export default Modal;

