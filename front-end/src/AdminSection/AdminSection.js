import React, { Component, PropTypes } from 'react'
import style from './style.css'

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
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/projects" component={ProjectsList}/>
                <Route exact path="/projects/:projectId" component={Project}/>
                <Route exact path="/admin" component={AdminSection}></Route>
                <Route component={NotFound}/>
          </Switch>
        )
    }
}

AdminSection.propTypes = propTypes

AdminSection.defaultProps = defaultProps

export default AdminSection
