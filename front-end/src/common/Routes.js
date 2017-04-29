import React from "react";
import {Route, Switch} from "react-router";
import HomePage from "../HomePage/HomePage";
import ProjectsList from "../ProjectsList/ProjectsList";
import Project from "../ProjectDetail/ProjectDetail";
import NotFound from "../NotFound/NotFound";
import AdminSection from "../AdminSection/AdminSection";

const Routes = ({user, UserManager}) => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/projects/:direction?" component={ProjectsList}/>
        <Route exact path="/project/:projectId" component={Project}/>
        <Route path="/admin" component={AdminSection}/>
        <Route component={NotFound}/>
    </Switch>
);
export default Routes;