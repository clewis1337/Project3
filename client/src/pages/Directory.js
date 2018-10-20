import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import DirectoryTable from "../components/DirectoryTable";
import DummyData from "../utils/General.json"

class Directory extends Component {
  state = {
    welcomeArea: [],
    userTopicArea: [{topicTitle: "quickfix"}],
    directoryID: 0
  }
  componentDidMount(){ //Loa
    let topicsArray = [];
    fetch(`/all`) //Ajax call getting all posts
        .then(res => res.json())
        .then((result) => {
          console.log(result)
            result.forEach(post => {
              console.log("post", post)
              if((!topicsArray.includes(post.topicTitle)) && (post.topicTitle !== undefined)) 
                  topicsArray.push({topicTitle: post.topicTitle});              
            });
        }).then(() => this.setState({userTopicArea: topicsArray}))
        .catch(error => console.error('Error:', error));
        console.log(this.state.userTopicArea)
  }

  render(){
  return (
      <Container>
        <Jumbotron>
          
        </Jumbotron>

      <DirectoryTable TopicData={DummyData}></DirectoryTable>
      <DirectoryTable TopicData={this.state.userTopicArea}></DirectoryTable>
      </Container>

  
    )}
  }


export default Directory;