
import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Dashboard.css";
import Modal from "../Modal/Modal";

class Dashboard extends Component {
  state = { 
    show: false,
    //Data to send to server
      author: "",
      topicID: null,
      authorAvatar: "",
      date: "",
      content: "",
      link: ""          
   };

  showModal = (e) => {
    e.preventDefault();
    this.setState({ show: true });
  };

  hideModal = (e) => { //X Button, close modal, don't submit
    e.preventDefault();
    this.setState({ show: false });
  }

  hideModalAndSubmit = (e) => { //Close modal and submit post
    e.preventDefault();
    this.createPost();
    this.setState({ show: false });
  }
  createPost = () => {
    fetch('/submit', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        author: this.state.author,
        authorAvatar: this.state.authorAvatar,
        topicID: 3,
        date: Date(Date.now()).toString(),
        content: this.state.content,
        link: this.state.link
      })
    }).then(res => res.json())
      .then((res) => {
          // this.getPosts(); //Refreshes posts after deletion
          console.log("added post!")
      })
      .catch(error => console.error('Error:', error));
  }
  handleChange = (e) => { //on form entry, start setting state to data
    e.preventDefault();
    console.log("match", this.props.match);
    const { name, value } = e.target
    this.setState({
     [name]: value
    //  topicID: this.props.match.params.id
    });
  }

  render() {
    return (
      <div>
       <button className="button5" type="button" onClick={this.showModal}>
         Create Post
        </button>
        <Modal 
          show={this.state.show}>

            <section className="modal-main"> {/*This was in modal, but had to be moved to dashboard */}
            <button className="cButton" onClick={this.hideModal}>X</button>
            <form>
              <div className="form">
              <label htmlFor="author" >User Name:</label>
              <input type="text" id="fname" name="author" onChange={this.handleChange}></input>
              <label htmlFor="authorAvatar">Image:</label>
              <input type="text" id="fname" name="authorAvatar" onChange={this.handleChange}></input>
              <label htmlFor="content" >Content: </label>
              <textarea type="text" id="pname" name="content" onChange={this.handleChange}></textarea>
              <label htmlFor="link">Link:</label>
              <input type="text" id="fname" name="link" onChange={this.handleChange}></input>
        </div>
       </form>
       <button className="mButton" onClick={this.hideModalAndSubmit}>Submit</button>
       </section>

       </Modal>
      </div>    
    );
  }
}

export default Dashboard;
// const container = document.createElement("div");
// document.getElementById("root").appendChild(container);
// ReactDOM.render(<Dashboard />, container);
