import React, { Component, PropTypes } from 'react'
import {Route, Switch} from "react-router";
import Donators from "./forms/Donators"
import EventForm from "./forms/EventForm"
import Docs from "./forms/Docs"


const AdminSection = props => (
    <Switch>
        <Route exact  path={`${props.match.url}/donators`} component={Donators}/>
        <Route  exact path={`${props.match.url}/docs`} component={Docs}/>
         <Route  exact path={`${props.match.url}/events`} component={EventForm}/>
    </Switch>
)


export default AdminSection


