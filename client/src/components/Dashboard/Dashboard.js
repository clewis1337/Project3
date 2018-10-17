
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Dashboard.css";
import Modal from "../Modal/Modal";

class Dashboard extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
       <button className="button5" type="button" onClick={this.showModal}>
         Create Post
        </button>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          
        </Modal>
      </div>  
        
      
    );
  }
}

export default Dashboard;
const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);
