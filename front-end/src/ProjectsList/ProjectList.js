import React, { Component, PropTypes } from 'react'
import ProjectItem from './components/ProjectItem';
import {Link} from "react-router-dom";


const propTypes = {
  
}

const defaultProps = {
    projects: [
    
            {
                _id: 1,
                title: "Project title",
                description: "Description"
            },
            {
                _id: 2,
                title: "Project title 2",
                description: "description"
            }

        ]
}

class ProjectsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                    
                {
                    this.props.projects.map((project) => (

                        <li key={project.id} >
                            <Link to={`${this.props.match.url}/${project._id}`}>
                                 <ProjectItem project={project} />
                            </Link>
                        </li>
                     ))
                        
                }
                </ul>    
            </div>
        )
    }
}

ProjectsList.propTypes = propTypes

ProjectsList.defaultProps = defaultProps

export default ProjectsList
