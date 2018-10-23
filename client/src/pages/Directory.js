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
            result.forEach(post => {
              console.log("post", post)
              if((!topicsArray.includes(post.topicTitle)) && (post.topicTitle !== undefined) && (parseInt(post.topicID) < 300) && (parseInt(post.topicID) > 3)) 
                  topicsArray.push({topicTitle: post.topicTitle, topicID: post.topicID});              
            });
        }).then(() => this.setState({userTopicArea: topicsArray}))
        .catch(error => console.error('Error:', error));
  }

  render(){
  return (
      <Container>
        <Jumbotron>
          
        </Jumbotron>

      <DirectoryTable Title="Welcome Area" TopicData={DummyData}></DirectoryTable>
      <DirectoryTable Title="Public Forum" TopicData={this.state.userTopicArea} directoryID={this.props.match.params.id}></DirectoryTable>
      </Container>

  
    )}
  }


export default Directory;