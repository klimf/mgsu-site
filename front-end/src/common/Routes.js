import React from "react";
import {Route} from "react-router";
import MainPage from "../MainPage/MainPage";
import ProjectsList from "../ProjectsList/ProjectList";
import Project from "../Project/Project";

const routes = () => (
    <div>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/projects" component={ProjectsList}/>
        <Route exact path="/projects/:projectId" component={Project}/>
    </div>
)
export default routes;