import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const actions = {
    create: (props) => ( <Link to={`/admin#/${props.type}/create`} className="toolbar-btn create-btn"></Link>),
    edit: (props) => (<Link to={`/admin#/${props.type}/${props.id}`} className="toolbar-btn edit-btn"></Link>),
    delete: (props) => (<Link to={`/admin#/${props.type}/${props.id}/delete`} className="toolbar-btn delete-btn"></Link>)
}

class _EditableItem extends Component {
    render() {
        return (
            <span className="relative">
                {
                    this.props.user.data.role && this.props.user.data.role === 1 ?
                        (<div className="admin-toolbar__item-wrap">
                            {this.props.actions.map((action, index) =>
                                <div key={index}>
                                    {actions[action](this.props)}
                                </div>)
                            }
                        </div>)
                        :
                        null
                }
                {this.props.children}
            </span>
        )
    }
}

class _ActionBar extends Component {
    render() {
        return (
            <span>
                {
                    this.props.user.data && this.props.user.data.role === 1 ?
                        (<div className="admin-toolbar__actions-bar">
                             {this.props.actions.map(action => (
                                 actions[action](this.props)
                                ))
                             }
                        </div>)
                        :
                        null
                }
                {this.props.children}
            </span>
        )
    }
}


_EditableItem.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired
};


_ActionBar.propTypes = {
    type: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.UserState
    }
};

export const EditableItem = connect(mapStateToProps)(_EditableItem);
export const ActionBar = connect(mapStateToProps)(_ActionBar);

