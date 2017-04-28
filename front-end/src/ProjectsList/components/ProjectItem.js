import React from "react";
import PropTypes from "prop-types";

const ProjectItem = ({project}) => (
    <div>
        <h1>{project.id}</h1>
        <h3>{project.description}</h3>
    </div>
);

ProjectItem.PropTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onCLick: PropTypes.func.isRequired
};

export default ProjectItem;