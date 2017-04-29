import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import {withRouter} from "react-router-dom";
import {connect, bindActionCreators} from "react-redux";
import {GetByDirection} from "./state";

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
                <div className="content small-12 row">
                    <div className="space-3"/>
                    <div className="projects-icon small-0"
                         style={{background: "url(" + require("../media/images/project-nav/" + "Образование" + ".png") + ") no-repeat"}}></div>
                    <div className="projects-navigation">
                        {
                            this.props.filters.map((filter, index) =>
                                <div className="projects-nav-item"
                                     style={{background: "url(../media/images/project-nav/" + filter + ".png) no-repeat"}}
                                     key={index}>
                                    {filter}
                                </div>
                            )
                        }
                    </div>
                    <div className="space-3"/>
                    {
                        this.props.projects.data &&
                        this.props.projects.data.map((project, index) =>
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
        // projects: state.ProjectsListAsync
        projects: defaultProps
    }
    return props;
}

const mapDispatchToProps = dispatch => ({
    getByDirection: GetByDirection.bindTo(dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsList));
