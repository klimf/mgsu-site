import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import {Link} from "react-router-dom";

const defaultProps = {
    projects: [
        {
            _id: 1,
            title: "ProjectDetail title",
            description: "Description"
        },
        {
            _id: 2,
            title: "ProjectDetail title 2",
            description: "description"
        }

    ]
};

class ProjectsList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.projects.map((project) =>
                            <li key={project.id}>
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

export default ProjectsList
