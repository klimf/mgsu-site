import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const actions = {
    create: () => ( <Link to={`/admin#/${this.props.type}/create`} className="admin-toolbar__actions-btn create-btn"></Link>),
    edit: () => (<Link to={`/admin#/${this.props.type}/${this.props.id}`} className="admin-toolbar__actions-btn edit-btn"></Link>),
    delete: () => (<Link to={`/admin#/${this.props.type}/${this.props.id}/delete`} className="admin-toolbar__actions-btn delete-btn"></Link>)
}


class EditableItem extends Component {
    render() {
        return (
            <span>
                {
                    this.props.user.data.role && this.props.user.data.role === 1  ?
                        (<div className="admin-toolbar__item-wrap">
                          {this.props.actions.map(action =>(actions[action].apply(this)))}
                        </div>)
                        :
                        null
                }
                {this.props.children}
            </span>
        )
    }
}

class ListActions extends Component {
    render() {
        return (
            <span>
                {
                    this.props.user.data.role && this.props.user.data.role === 1  ?
                        (<div className="admin-toolbar__actions-bar">
                             {this.props.actions.map(action =>(actions[action].apply(this)))}
                        </div>)
                        :
                        null
                }
                {this.props.children}
            </span>
        )
    }
}


EditableItem.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired
};


ListActions.propTypes = {
    type: PropTypes.string.isRequired,
    actions: PropTypes.array.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.UserState
    }
};

export default {
    editableItem: connect(mapStateToProps)(EditableItem),
    listActions: connect(mapStateToProps)(ListActions)
}
