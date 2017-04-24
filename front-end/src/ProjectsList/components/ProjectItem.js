import React, { Component, PropTypes } from 'react'
import {Link} from "react-router-dom";




function projectItem({project}) {
    console.log(arguments)
    return (
        <div>
                <h3>{project.description}</h3>
           </div>
        )
}



// projectItem.PropTypes = {
//     id: propTypes.number.isRequired,
//     title: propTypes.string.isRequired,
//     description: propTypes.string.isRequired,
//     onCLick: propTypes.func.isRequired
// };

export default projectItem;