import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import { ProjectsListManager } from "../common/reducers/ProjectsState"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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
    ]

};

class ProjectsList extends Component {
     componentDidMount() {

        this.changeDirection(this.props.match.params.direction || null);
      
    }

    changeDirection(direction) {
       return this.props.ProjectsListManager.changeDirection( direction)
    }
   
    render() {
        return (
            <div className="page row expanded">
                <div className="content small-12 row">
                    <div className="space-3"/>
                    <div className="projects-icon small-0"
                         style={{background: "url(" + require("../media/images/project-nav/" + "образование" + ".png") + ") no-repeat"}}></div>
                    <div className="projects-navigation">
                        {
                            this.props.filters.map((filter, index) =>
                                <div className="projects-nav-item"
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
    console.log(state.ProjectsState.list);
    const props =  {
        projects: state.ProjectsState.list
    };
    return props;
};

const mapDispatchToProps = dispatch => ({
    ProjectsListManager: ProjectsListManager.bindTo(dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsList));
