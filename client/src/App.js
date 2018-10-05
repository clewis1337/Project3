import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Table from "./components/Table"


const App = () => (
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/topic/id/:id" component={Topic} />
      <Footer />
    </div>
  </Router>
);

export default App;
