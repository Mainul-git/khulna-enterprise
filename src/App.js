import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import AllProject from "./Components/AllProject/AllProject";
import Project from "./Components/AllProject/Project/Project";
import Contact from "./Components/Contact/Contact";
import DashBoard from "./Components/DashBoard/DashBoard/DashBoard";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div>
      <Router> 
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/ke-dashboard">
            <DashBoard/>
          </Route>
          <Route path="/project/single">
            <Project/>
          </Route>
          <Route path="/project"> 
            <AllProject/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
