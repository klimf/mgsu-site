import React from "react";
import {Route} from "react-router";
import HomePage from "../HomePage/HomePage";
import ProjectsList from "../ProjectsList/ProjectList";
import Project from "../ProjectDetail/ProjectDetail";
import NotFound from "../NotFound/NotFound";

const Routes = () => (
    <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/projects" component={ProjectsList}/>
        <Route exact path="/projects/:projectId" component={Project}/>
        <Route component={NotFound}/>
    </div>
);
export default Routes;