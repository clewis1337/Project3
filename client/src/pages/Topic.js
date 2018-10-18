// import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";
import API from "../utils/API";
import Modal from "../components/Modal";
import Dashboard from "../components/Dashboard";
import Button from "../components/Button";


class Topic extends Component {
    state = { //Start as empty, need to query database to get posts about topic
        Posts: [{ "Content": "No posts loaded" }]
    }


    componentDidMount() { //Runs once to get posts, will be an API call later
        // this.setState({ //DUMMY DATA
        //   Posts: Posts
        // })
        console.log(this.props.match);
        // axios.get(`/topicID/${this.props.match.params.id}`)
        // .then((res) => {
        //     this.setState({Posts: res})
        //  });

        fetch(`/topicID/${this.props.match.params.id}`) //Ajax call getting all posts
        .then(res => res.json())
        .then((result) => {
            this.setState({Posts: result})
        }).catch(error => console.error('Error:', error));
        // console.log(this.state.Posts)
        // console.log(document.URL)
      }
    
    deletePost = (id) =>{
        // fetch(url + '/' + item, {
        //     method: 'delete'
        //   }).then(response =>
        //     response.json().then(json => {
        //       return json;
        //     })
        // fetch(`/topicID/${this.props.match.params.id}`) //Ajax call getting all posts
        // .then(res => res.json())
        // .then((result) => {
        //     this.setState({Posts: result})
        // }).catch(error => console.error('Error:', error));

        fetch(`/delete/${id}`, {
            method: 'post'
          }).then(res => res.json())
            .catch(error => console.error('Error:', error));

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
              deletePost={this.deletePost}
            />

  
        </div>
    )
}
};

export default Topic;