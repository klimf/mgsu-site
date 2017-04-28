import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

const defaultProps = {

    filters: [
        'Все проекты',
        'Образование',
        'Наука',
        'Студенты',
        'Стипендии',
        'Инфраструктура',
        'Спорт',
        'Проффессора и преподаватели'
    ],
    projects: [
        {
            id: 1,
            title: "Project title",
            description: "Description description description description description description description description description description description",
            image: "placeholder.png"
        },
        {
            id: 2,
            title: "Project title 2 Project title 2 Project title 2",
            description: "description",
            image: "placeholder.png"
        },
        {
            id: 3,
            title: "Project title 3",
            description: "description",
            image: "placeholder.png"
        },
        {
            id: 4,
            title: "Project title 4",
            description: "description",
            image: "placeholder.png"
        }

    ]
};

class ProjectsList extends Component {
    render() {
        return (
            <div className="page row expanded">
                <div className="content small-12 row">
                    <div className="space-3"/>
                    <div className="project-navigation">
                        {
                            this.props.filters.map((filter, index) =>
                                <div className="project-nav-item" key={index}>
                                    {filter}
                                </div>
                            )
                        }
                    </div>
                    <div className="space-3"/>
                    {
                        this.props.projects.map((project, index) =>
                            <ProjectItem key={index} project={project}/>
                        )
                    }
                </div>
                <div className="space-3"/>
            </div>
        )
    }
}

ProjectsList.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    const props = {
        projects: state.ProjectsList
    };
    return state;
};

export default withRouter(connect(mapStateToProps)(ProjectsList))
