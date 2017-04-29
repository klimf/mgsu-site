import React from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";

const ProjectItem = (props) => (
    <div className="project-item small-12 medium-6 large-4 columns end">
        <Link to={`project/${props.project._id}`}>
            <div className="project-image space-7">
                <div className="bg-img" style={{"background": "url(" + (props.project.img ? props.project.img.small : "../media/images/placeholder.png" + ") center center no-repeat;") }}/>
            </div>
            <div className="project-text">
                <h2 className="small-12 upprecase center black columns">{props.project.name}</h2>
                <p className="small-12 center black columns">{props.project.shortDescription}</p>
            </div>
            <div className="space-base"></div>
            <div className="project-progress">
                <div className="project-bar"></div>
                <div className="project-bar primary" style={{"width":70 + "%"}}></div>
                <div className="small-6 space-4 columns no-padding">
                    <p className="black center">Собрано</p>
                    <h3 className="black center">{props.project.given}</h3>
                </div>
                <div className="small-6 space-4 columns no-padding">
                    <p className="black center">Цель</p>
                    <h3 className="black center">{props.project.need}</h3>
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