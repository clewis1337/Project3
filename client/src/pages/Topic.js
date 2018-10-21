// import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";
import Dashboard from "../components/Dashboard";
import Jumbotron from "../components/Jumbotron";
import Modal from "../components/Modal";
import "../index.css"

class Topic extends Component {
    state = { //Start as empty, need to query database to get posts about topic
        Posts: [{ "Content": "No posts loaded" }],
        show: false,
        _id: '',
        content: '',
        link: '',
        date: '',
        author: '',
        authorAvatar: ''    
    }


    componentDidMount() { //Runs once to get posts, will be an API call later
        this.getPosts(); //Gets posts from db on pageload 
    }
    
    getPosts = () => { //Function to get posts, can be reused with this.getPosts
        fetch(`/topicID/${this.props.match.params.id}`) //Ajax call getting all posts
        .then(res => res.json())
        .then((result) => {
            this.setState({Posts: result}) //Set state to results of query
        }).catch(error => console.error('Error:', error));
    }
    deletePost = (id) =>{
        fetch(`/delete/${id}`, {
            method: 'DELETE'
          }).then(res => res.json())
            .then((res) => {
                this.getPosts(); //Refreshes posts after deletion
            })
            .catch(error => console.error('Error:', error));
    }
    handleChange = (e) => { //on form entry, start setting state to data
        const { name, value } = e.target
        this.setState({ [name]: value });
      }
    editPost = () => {
        fetch(`/update/${this.state._id}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              date: " Edited: " + Date(Date.now()).toString(),
              content: this.state.content,
              link: this.state.link
            })
          }).then(res => res.json())
            .then((res) => {
                 this.getPosts();
                this.hideModal();
                console.log("edited post!")
            })
            .catch(error => console.error('Error:', error));
    }

    showModal = (id) => { //Triggers modal and populates it with the posts data
        this.setState({show: true, _id: id, content: document.getElementById(id + 'content').textContent, link: document.getElementById(id + 'link').textContent},
      () => {
        console.log("inside callback")
        document.getElementById('pname').textContent = this.state.content,
        document.getElementById('fname').textContent = this.state.link
       })

    }
    hideModal = () => this.setState({show: false})

    render(){ return (
        <div>
            <Dashboard getPosts={this.getPosts} location={this.props.match.params.id}/>
            <Modal
             show={this.state.show}>

            <section className="modal-main"> {/*This was in modal, but had to be moved to dashboard */}
            <button className="cButton" onClick={this.hideModal}>X</button>
            <form>
              <div className="form">
                {/* <label htmlFor="author" >User Name:</label> */}
                {/* <input type="text" id="fname" name="author" onChange={this.handleChange}></input> */}
                {/* <label htmlFor="authorAvatar">Image:</label> */}
                {/* <input type="text" id="fname" name="authorAvatar" onChange={this.handleChange}></input> */}
                <label htmlFor="content" >Content: </label>
                <textarea id="pname" type="text" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                <br/><br/>
                <label htmlFor="link">Link:</label>
                <input id="fname" type="text" name="link" onChange={this.handleChange} value={this.state.link}></input>
              </div>
            </form>
            <button className="mButton" onClick={this.editPost}>Submit</button>
          </section>

        </Modal>
            <Forum 
              PostData={this.state.Posts}
              editPost={this.editPost}
              handleEdit={this.handleEdit}
              showModal={this.showModal}
              show={this.show}
              deletePost={this.deletePost}
            />

  
        </div>
    )
}
};

export default Topic;