import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";
import API from "../utils/API";
import Modal from "../components/Modal";
import Dashboard   from "../components/Dashboard";
import Button from "../components/Button";



class Topic extends Component {
    state = { //Start as empty, need to query database to get posts about topic
        Posts: []
    }

    componentDidMount() { //Runs once to get posts, will be an API call later
        this.setState({
          Posts: Posts
        })
      }
    
    render(){

    return (
<div>

     <Modal></Modal>  
     <Dashboard></Dashboard>
        <Forum 

            PostData={Posts}
      />

    

     
        </div>
    )
    }
};

export default Topic;