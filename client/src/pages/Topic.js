// import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";

class Topic extends Component {
    state = { //Start as empty, need to query database to get posts about topic
        Posts: [{ "Content": "No posts loaded" }]
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
    //     fetch('https://api.github.com/gists', {
    // method: 'post',
    // body: JSON.stringify(opts)
    // }).then(function(response) {
    // return response.json();
    // }).then(function(data) {
    // ChromeSamples.log('Created Gist:', data.html_url);
    // });
    }

    render(){ return (
        <div>
            <Forum 
              PostData={this.state.Posts}
              editPost={this.editPost}
              showEdit={this.showEdit}
              deletePost={this.deletePost}
            />

  
        </div>
    )
}
};

export default Topic;