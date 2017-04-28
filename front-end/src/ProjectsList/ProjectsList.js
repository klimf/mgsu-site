import React, { Component } from "react";
import ProjectItem from "./components/ProjectItem";
import { Link, withRouter } from "react-router-dom";
import { connect, bindActionCreators } from "react-redux";
import { bindAll } from 'redux-act'

import { GetByDirection, ProjectsListActions as actions } from "./state"


const defaultProps = {

};

class ProjectsList extends Component {


    componentDidMount() {

        console.log(this.props);

        this.props.getByDirection.perform({
            query: {
                direction: this.props.match.params.direction
            }
        })

    }

    render() {
        return (
            <div className="page row expanded">
                <div className="space-3" />
                <div className="content small-12 row">

                    {
                        this.props.projects.data &&
                        this.props.projects.data.map((project, index) =>
                            <ProjectItem key={index} project={project} />
                        )

                    }
                </div>
                <div className="space-3" />
            </div>
        )
    }
}

ProjectsList.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    const props = {
        projects: state.ProjectsListAsync
    }
    return props;
}

const mapDispatchToProps = dispatch => ({
    getByDirection: GetByDirection.bindTo(dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsList));
