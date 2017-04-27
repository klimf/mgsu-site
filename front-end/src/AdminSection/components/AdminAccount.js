import React, { Component, PropTypes } from 'react'
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import Donators from "./AccountDepartments/Donators"

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
            <div>
                <ul>
                    <li>
                        <NavLink to={`${this.props.match.url}/donators`}>Благотворители</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={`${this.props.match.url}/`} component={Donators}/>
                 </Switch>
            </div>
        )
    }
}

AdminSection.propTypes = propTypes

AdminSection.defaultProps = defaultProps

export default AdminSection
