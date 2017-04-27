import React, { Component, PropTypes } from 'react'
import {Route, Switch} from "react-router";
import Donators from "./forms/Donators"
import Docs from "./forms/Docs"
const propTypes = {}

const defaultProps = {}

class AdminSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <Switch>
                <Route exact  path={`${this.props.match.url}/donators`} component={Donators}/>
                <Route  exact path={`${this.props.match.url}/docs`} component={Docs}/>
            </Switch>
        )
    }
}

AdminSection.propTypes = propTypes

AdminSection.defaultProps = defaultProps

export default AdminSection
