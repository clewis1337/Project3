import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
import MenuOptions from "../utils/MenuOptions" //All the menu options/topics that will be on the front page
import Posts from "../utils/Posts";
import Container from "../components/Container"
//Format of menu options, they are an array of objects in MenuOptions
//{ 
//  topic: BlahBlah 
//  link: Route //NOT IMPORTANT YET!  Wont implement until we start displaying posts
//  
//}
// *** REMINDER- to cycle through the array of objects, use  something like this
/*menuOptions.map(option => (
          <TopicRow
            topic={option.topic}   //Where you create TopicRow in components
            route={option.link}
          />
        )) */
const Home = () => (
    <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
      <h1>Pupster</h1>
      <h2>They're the Good Boys and Girls</h2>
    </Hero>
      
);

export default Home;
