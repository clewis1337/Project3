import React, { Component } from "react";
import Forum from "../components/Forum";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";

const LessonPlans = props => {
    return (
      <Container>
        <Jumbotron backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <h1>Pupster</h1>
          <h2>They're the Good Boys and Girls</h2>
        </Jumbotron>
    

     <Forum />
       
      </Container>
    )
  }


export default LessonPlans;