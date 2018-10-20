import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import DirectoryTable from "../components/DirectoryTable";
import DummyData from "../utils/General.json"

class Directory extends Component {
  state = {
    welcomeArea: [],
    userTopicArea: []
  }
  componentDidMount(){ //Loa
    this.setState({directoryID: this.props.match.params.id});
  }

  render(){
  return (
      <Container>
        <Jumbotron>
          
        </Jumbotron>

      <DirectoryTable TopicData={DummyData}></DirectoryTable>
      {/* <DirectoryTable TopicData={this.stateuserTopicArea}></DirectoryTable> */}
      </Container>

  
    )}
  }


export default Directory;