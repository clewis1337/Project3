// import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Forum from "../components/Forum";
import API from "../utils/API";
import Modal from "../components/Modal";
import Dashboard   from "../components/Dashboard";
import Button from "../components/Button";
import axios from "axios";


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
    
    deletePost = () =>{
        // fetch(url + '/' + item, {
        //     method: 'delete'
        //   }).then(response =>
        //     response.json().then(json => {
        //       return json;
        //     })

    }
    render(){

    return (
        <div>
            <Forum 
              PostData={this.state.Posts}
              
            />

        </div>
    )
    }
};

export default Topic;