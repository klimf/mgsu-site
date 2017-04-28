import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const defaultProps = {
    // projects: [
    //     {
    //         _id: 1,
    //         title: "Project title",
    //         description: "Description"
    //     },
    //     {
    //         _id: 2,
    //         title: "Project title 2",
    //         description: "description"
    //     }

    // ]
};

class ProjectsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.projects.data.map((project, index) =>
                            <li key={index}>
                                <Link to={`${this.props.match.url}/${project._id}`}>
                                    <ProjectItem project={project}/>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

ProjectsList.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    const props = {
        projects: state.ProjectsList
    }
    return props;
}

export default withRouter(connect(mapStateToProps)(ProjectsList))
