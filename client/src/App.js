import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Account from "./pages/Account";


const App = () => (
  <Router>
    <div>
      <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/topic/:id" component={Topic} />
      
      <Footer />
    </div>
  </Router>
);

export default App;
