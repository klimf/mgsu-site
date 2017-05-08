import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const actions = {
    create: (props) => ({
        link: `/admin#/${props.type}/create`,
        class: 'create-btn'
    }),
    edit: (props) => ({
        link: `/admin#/${props.type}/${props.id}`,
        class: 'edit-btn'
    }),
    delete: (props) => ({
        link: `/admin#/${props.type}/${props.id}/delete`,
        class: 'delete-btn'
    })
};

class _EditableItem extends Component {
    render() {
        return (
            <div className="relative">
                {
                    this.props.user.data.role && this.props.user.data.role === 1 ?
                        (<div className="admin-toolbar__item-wrap">
                            {
                                this.props.actions.map((action, index) => (
                                    <Link key={index} to={actions[action](this.props).link}
                                          className={`toolbar-btn ${actions[action](this.props).class}`}/>
                                    )
                                )
                            }
                        </div>)
                        :
                        null
                }
                {this.props.children}
            </div>
        )
    }
}

class _ActionBar extends Component {
    render() {
        return (
            <div>
                {
                    this.props.user.data && this.props.user.data.role === 1 ?
                        (<div className="admin-toolbar__actions-bar">
                            {this.props.actions.map((action, index) => (
                                <Link key={index} to={actions[action](this.props).link}
                                className={`toolbar-btn ${actions[action](this.props).class}`}/>
                            ))
                            }
                        </div>)
                        :
                        null
                }
                {this.props.children}
            </div>
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

