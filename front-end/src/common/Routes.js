import React from "react";
import {Route, Switch} from "react-router";
import HomePage from "../HomePage/HomePage";
import ProjectsList from "../ProjectsList/ProjectsList";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import NotFound from "../NotFound/NotFound";
import AdminSection from "../AdminSection/AdminSection";
import Contacts from "../Contacts/Contacts";
import AboutPage from "../AboutPage/AboutPage";
import GradClubPage from "../GradClubPage/GradClubPage";
import SponsorsPage from "../SponsorsPage/SponsorsPage";

const Routes = ({user, UserManager}) => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/projects/:direction?" component={ProjectsList}/>
        <Route exact path="/project/:projectId" component={ProjectDetail}/>
        <Route exact path="/contacts" component={Contacts}/>
        <Route path="/about/:department" component={AboutPage}/>
        <Route exact path="/alumni/:department" component={GradClubPage}/>
        <Route exact path="/sponsors" component={SponsorsPage}/>
        <Route path="/admin" component={AdminSection}/>
        <Route component={NotFound}/>
    </Switch>
);
export default Routes;