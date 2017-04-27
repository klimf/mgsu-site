import React, { Component, PropTypes } from 'react'
import {Route, Switch} from "react-router";
import AdminAccount from "./components/AdminAccount";
import FormsSection from "./components/FormsSection";


const AdminSection = props => (
    <Switch>
        <Route exact path={`${props.match.url}/`} component={AdminAccount}/>
        <Route  path={`${props.match.url}/forms`} component={FormsSection}/>
    </Switch>
)


export default AdminSection

