import React, {Component} from "react";
import ProjectItem from "./components/ProjectItem";
import {Link, withRouter} from "react-router-dom";
import {connect, bindActionCreators} from "react-redux";
import {bindAll} from 'redux-act'

import {GetByDirection} from "./state"


const defaultProps = {
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
        console.log(GetByDirection);
        this.props.dispatch(GetByDirection.perform({
            query: {
                direction: null
            }
        }))
    }
   
 
    render() {
        return (
            <div className="page row expanded">
                <div className="space-3"/>
                <div className="content small-12 row">

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
        projects: state.ProjectsList
    }
    return  props;
}

const mapDispatchToProps = dispatch => ({
        getByDirectionActions:  bindAll(GetByDirection.actions, dispatch),
        getByDirection: GetByDirection
    })

export default withRouter(connect(mapStateToProps)(ProjectsList));
