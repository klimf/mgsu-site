import React from "react";
import {Route} from "react-router";
import HomePage from "../HomePage/HomePage";
import ProjectsList from "../ProjectsList/ProjectList";
import Project from "../ProjectDetail/ProjectDetail";

const Routes = () => (
    <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/projects" component={ProjectsList}/>
        <Route exact path="/projects/:projectId" component={Project}/>
    </div>
)
export default Routes;