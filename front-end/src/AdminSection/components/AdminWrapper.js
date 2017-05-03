import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class AdminWrapper extends Component {
    render() {
        return (
            <span>
                //state.userState.data.role === 1
                <div className="relative">
                    <Link to={`/admin#/${this.props.type}/create`}><img
                        src={require('../../media/images/icon-close.png')}/></Link>
                    <Link to={`/admin#/${this.props.type}/${this.props.id}`}><img
                        src={require('../../media/images/icon-menu.png')}/></Link>
                    <Link to={`/admin#/${this.props.type}/${this.props.id}/delete`}><img
                        src={require('../../media/images/icon-close.png')}/></Link>
                </div>
                {this.props.children}
            </span>
        )
    }
}

AdminWrapper.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default AdminWrapper;