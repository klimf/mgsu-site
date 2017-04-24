import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import MainPage from "../MainPage/MainPage";
import ProjectsList from "../ProjectsList/ProjectList";
import Project from "../Project/Project";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <ul>
          <li><Link to='/main'>Главная</Link></li>
          <li><Link to='/projects'>Проекты</Link></li>
        </ul>

        <hr/>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/main" component={MainPage} />
        <Route  exact path="/projects" component={ProjectsList}></Route>
        <Route exact path="/projects/:projectId" component={Project}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
