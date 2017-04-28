import React from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";

const ProjectItem = (props) => (
    <div className="project-item small-12 medium-6 large-4 columns end">
        <Link to={`${props.match.url}/${props.project.id}`}>
            <div className="project-image space-7">
                <div className="bg-img"/>
            </div>
            <div className="no-overflow space-4">
                <h2 className="small-12 upprecase center black columns">{props.project.title}</h2>
                <p className="small-12 center black columns">{props.project.description}</p>
            </div>
            <div className="space-2"></div>
            <div className="project-progress">
                <div className="project-bar"></div>
                <div className="project-bar primary" style={{"width":70 + "%"}}></div>
                <div className="small-6 space-4 columns no-padding">
                    <p className="black center">Собрано</p>
                    <h3 className="black center">12 000 000p</h3>
                </div>
                <div className="small-6 space-4 columns no-padding">
                    <p className="black center">Собрано</p>
                    <h3 className="black center">12 000 000p</h3>
                </div>
                <div className="small-12 space-2 columns"></div>
                <button className="small-12 primary-btn">Сделай вклад</button>
            </div>
        </Link>
    </div>
);

ProjectItem.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onCLick: PropTypes.func.isRequired
};

export default withRouter(ProjectItem);