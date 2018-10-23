import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Account from "./pages/Account";
import Directory from "./pages/Directory";
import LessonPlans from "./pages/LessonPlans";



const App = () => (
  <Router>
    <div>
       <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/topic/:id" component={Topic} />
        <Route path="/directory/:id" component={Directory} />
        <Route path="/lessonplans/" component={LessonPlans} />
      
      <Footer />
    </div>
  </Router>
);

export default App;
