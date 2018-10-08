import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Posts from "../utils/Posts";
import Container from "../components/Container";
import DirectoryTable from "../components/DirectoryTable";
import Table from "../components/Table";

//Dummy Data For Now, these will be updated from an API later.
import General from "../utils/General";
import LessonPlans from "../utils/LessonPlans";
import LifeInKorea from "../utils/LifeInKorea";
//End Dummy Data
class Home extends Component {
  state = { //Start as empty, need to query database to get numPosts etc
    General: [],
    LessonPlans: [],
    LifeInKorea: []
  }

  componentDidMount() { //Runs once to update the # of topics in each category
    this.setState({
      General: General,
      LessonPlans: LessonPlans,
      LifeInKorea: LifeInKorea
    })
  }

  render(){
    return (
      <Container>
        <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg" />
        <DirectoryTable 
          TableTitle="Lesson Plans"
          TableData={this.state.LessonPlans}
        />

        <Table>
          </Table>
       
      </Container>
    )
  }
}

export default Home;
