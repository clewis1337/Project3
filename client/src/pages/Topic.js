// import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";
import API from "../utils/API";
<<<<<<< HEAD
import Form from "../components/Form";
import axios from 'axios';
=======
import Modal from "../components/Modal";
import Dashboard   from "../components/Dashboard";
import Button from "../components/Button";

>>>>>>> 4d69241592ed2ef5d90e4ff5ead4134804beed8e


class Topic extends Component {
    state = { //Start as empty, need to query database to get posts about topic
        Posts: [{"Content": "No posts loaded"}]
    }
    

    componentDidMount() { //Runs once to get posts, will be an API call later
        // this.setState({ //DUMMY DATA
        //   Posts: Posts
        // })
        console.log(this.props.match);
        // axios.get(`/topicID/${this.props.match.params.id}`)
        // .then(res => {
        // this.setState({ Posts: res });
        //  });

        fetch(`/topicID/2`) //Ajax call getting all posts
        .then(res => res.json())
        .then((result) => {
            this.setState({Posts: result})
        });
        // console.log(this.state.Posts)
        // console.log(document.URL)
      }
    
    deletePost = () =>{

    }
    render(){

    return (
<<<<<<< HEAD
        <div>
            <Forum 
              PostData={this.state.Posts}
              
            />

        <Form></Form>
=======
<div>
<Forum 

PostData={Posts}
/>
    
     
   

     
>>>>>>> 4d69241592ed2ef5d90e4ff5ead4134804beed8e
        </div>
    )
    }
};

export default Topic;