import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import { ProjectsListManager } from "../common/reducers/ProjectsState";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {EditableItem, ActionBar} from '../AdminSection/components/AdminToolbar';

const defaultProps = {
    filters: [
        'Все проекты',
        'Образование',
        'Студенты',
        'Наука',
        'Преподаватели',
        'Инфраструктура',
        'Досуг',
        'Спорт'
    ],

    directions: [
        null,
        'Образование',
        'Студенты',
        'Наука',
        'Преподаватели',
        'Инфраструктура',
        'Досуг',
        'Спорт'
    ]

};

class ProjectsList extends Component {
    constructor(props) {
        super(props);
        this.currentDirection = this.props.directions[1];
        this.state = {
            isLoaded: false
        };
    }

    componentWillMount() {
        this.changeDirection(this.props.match.params.direction || null);
    }

    componentDidMount() {
        setTimeout(() => this.setState({isLoaded:true}), 100);
    }

    changeDirection(direction) {
       this.props.history.push('/projects/' + (direction || 'Все проекты'))
       this.props.filters.indexOf(direction) === -1 || direction == null ?
       this.currentDirection = this.props.directions[0] :
       this.currentDirection = this.props.directions[this.props.filters.indexOf(direction)];
       this.props.ProjectsListManager.changeDirection(this.currentDirection);
    }
   
    render() {
        return (
            <div className={`page row expanded fade-in ${this.state.isLoaded && "active"}`}>
                <div className="content small-12 row">
                    <div className="space-3"/>
                    <div className="projects-icon small-0"
                         style={{background: "url(" + require("../media/images/project-nav/" + (this.currentDirection ? this.currentDirection.toLowerCase() : 'стипендии') + ".png") + ") no-repeat"}}></div>
                    <div className="projects-navigation">
                        {
                            this.props.filters.map((filter, index) =>
                                <div className={"projects-nav-item " + (this.currentDirection == this.props.directions[index] ? "active" : "")}
                                     onClick={this.changeDirection.bind(this, filter)}
                                     key={index}>
                                    {filter}
                                </div>
                            )
                        }
                    </div>
                    <div className="space-3"/>
                    <ActionBar type="projects" actions={['create']} />
                    <div className={`fade-in ${!this.props.projects.loaded && "active"}`}>
                    {
                        this.props.projects.data && this.props.projects.data.length > 0  ?
                        this.props.projects.data.map((project, index) =>
                           
                                <ProjectItem key={index} project={project}/>
                        )
                        : <h2 className="center">К сожалению, проектов в этом направлении пока нет</h2>
                    }
                    </div>
                </div>
                <div className="space-3"/>
            </div>
        )
    }

}

ProjectsList.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    const props =  {
        projects: state.ProjectsState.list
    };
    return props;
};

const mapDispatchToProps = dispatch => ({
    ProjectsListManager: ProjectsListManager.bindTo(dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsList));
