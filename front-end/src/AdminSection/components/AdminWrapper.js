import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class AdminWrapper extends Component {
    render() {
        return (
            <span>
                {
                    this.props.user.data.role && this.props.user.data.role === 1  ?
                        <div className="relative">
                            <Link to={`/admin#/${this.props.type}/create`}><img
                                src={require('../../media/images/icon-close.png')}/></Link>
                            <Link to={`/admin#/${this.props.type}/${this.props.id}`}><img
                                src={require('../../media/images/icon-menu.png')}/></Link>
                            <Link to={`/admin#/${this.props.type}/${this.props.id}/delete`}><img
                                src={require('../../media/images/icon-close.png')}/></Link>
                        </div>
                        :
                        null
                }
                {this.props.children}
            </span>
        )
    }
}

AdminWrapper.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.UserState
    }
};

export default connect(mapStateToProps)(AdminWrapper);