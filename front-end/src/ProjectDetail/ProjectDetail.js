import React, {Component} from "react";
import { connect, bindActionCreators } from "react-redux";
import { withRouter } from "react-router-dom";
import { GetProjectDetailAsync } from "./state"

class ProjectDetail extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.project.name}</h1>
            </div>
        )
    }
    componentDidMount() {
        this.getProject(this.props.match.params.projectId)
    }
    getProject(id) {
        this.props.GetProjectDetailAsync.perform({
            params: [id]
        })
    }
}

const mapStateToProps = state => {
    const projectState = state.ProjectDetailAsync
    return {project: projectState}
};

const mapDispatchToProps = dispatch => {
    GetProjectDetailAsync: GetProjectDetailAsync.bindTo(dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));
