// import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";
import Dashboard from "../components/Dashboard";
import Jumbotron from "../components/Jumbotron";

class Topic extends Component {
    state = { //Start as empty, need to query database to get posts about topic
        Posts: [{ "Content": "No posts loaded" }],
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
    showEdit = (id) => {
        
    }
    editPost = (id) => {
        console.log("state on edit", this.state)
        fetch(`/update/${id}`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              date: "Edited:" + Date(Date.now()).toString(),
              content: document.getElementById(id + 'content').textContent,
              link: document.getElementById(id + 'link').textContent
            })
          }).then(res => res.json())
            .then((res) => {
                 this.getPosts();
                console.log("edited post!")
            })
            .catch(error => console.error('Error:', error));
    }

    handleEdit = (id) => {
        console.log(typeof document.getElementById(id + 'content').textContent)
        // this.setState({editedPost: {
        //     _id: id,
        //     content: document.getElementById(id + 'content').textContent,
        //     link: document.getElementById(id + 'link').textContent,
        //     date: 'Edited: ' + Date(Date.now()).toString()
        // }}, this.editPost(id))
        this.editPost(id)
        
    }

    render(){ return (
        <div>
            <Jumbotron></Jumbotron>
            <Dashboard getPosts={this.getPosts} location={this.props.match.params.id}/>
            <Forum 
              PostData={this.state.Posts}
              editPost={this.editPost}
              handleEdit={this.handleEdit}
              showEdit={this.showEdit}
              deletePost={this.deletePost}
            />

  
        </div>
    )
}
};

export default Topic;