import React, {Component} from "react";

class ProjectDetail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.match.params.projectId}</h1>
            </div>
        )
    }
}

export default ProjectDetail
