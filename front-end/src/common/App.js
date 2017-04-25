import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import ProjectsList from "../ProjectsList/ProjectList";
import Project from "../Project/Project";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div>
       <header>
         <ul>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/projects">Projects</Link></li>
         </ul>
       </header>
         <Routes></Routes>
       <footer>dqnsjdqn</footer>
      </div>
    );
  }
}

export default App;
