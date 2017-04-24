import React, { Component, PropTypes } from 'react';


class Project extends Component {
    constructor(props, state) {
        super(props)
        this.state = {

        }

    }

    render() {
        
        return (
            <div>
                <h1>{this.props.match.params.projectId}</h1>
            </div>
        )
    }
}


export default Project
