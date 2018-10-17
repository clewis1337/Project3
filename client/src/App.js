import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Table from "./components/Table"
import LessonPlans from "./pages/LessonPlans";
import Forum from "./components/Forum";
import Dashboard from "./components/Dashboard";
import Modal from "./components/Modal";


const App = () => (
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/lessonplans" component={LessonPlans} />
        <Route path="/topic/:id" component={Topic} />
      <Footer />
    </div>
  </Router>
);

export default App;
