import React from "react";
import "./Modal.css";



const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}

      <button className="cButton" onClick={handleClose}>X</button>
      <form>
        <div className="form">
      <label for="fname">User Name:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="fname">Image:</label>
      <input type="text" id="fname" name="fname"></input>
      <label for="fname">Comments: </label>
      <textarea type="text" id="pname" name="comment[body]"></textarea>
      <label for="fname">Link:</label>
      <input type="text" id="fname" name="fname"></input>
      </div>
      </form>
      <button className="mButton" onClick={handleClose}>Submit</button>
      </section>
    </div>
  );
};

export default Modal;

