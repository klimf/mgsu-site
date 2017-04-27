import React, { Component, PropTypes } from 'react'
import {Route, Switch} from "react-router";
import Donators from "./forms/Donators"
import Docs from "./forms/Docs"


const AdminSection = props => (
    <Switch>
        <Route exact  path={`${props.match.url}/donators`} component={Donators}/>
        <Route  exact path={`${props.match.url}/docs`} component={Docs}/>
    </Switch>
)


export default AdminSection


