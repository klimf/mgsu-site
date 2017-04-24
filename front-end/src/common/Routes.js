import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../common/App';
import MainPage from "../MainPage/MainPage";
import ProjectsList from "../ProjectsList/ProjectList";
import Project from "../Project/Project";

const routes = () => (
    <div>
            <Route exact path="/" component={MainPage} />
            <Route  exact path="/projects" component={ProjectsList}></Route>
            <Route exact path="/projects/:projectId" component={Project}></Route>
    </div>
)
export default routes;