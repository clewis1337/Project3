import Posts from "../utils/Posts.json"
import React, { Component } from "react";
import Post from "../components/Post";


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

        <Post 
            PostData={Posts}
        />
        // <div>
        // <h1>Hello!  Here are the posts</h1>
        // {Posts.map(post => (
        //    <div>
        //         {post.date} {post.author} {post.content}
        //    </div>))}
        // </div>
    )
    }
};

export default Topic;