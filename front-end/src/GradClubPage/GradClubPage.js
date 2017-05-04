import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {AboutContentManager} from "../common/reducers/ContentState";
import {Route} from "react-router";
import sanitizeHtml from "sanitize-html";
import {resolveStatic} from '../common/helpers';


class GradClubPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.GradClubManager.get();
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        {
                            this.props.club.data && this.props.club.data.map((item, index) =>
                                <NavLink to={`/alumni/${item.title}`} className="projects-nav-item"
                                         key={index}>
                                    {item.title}
                                </NavLink>
                            )
                        }
                    </div>
                    {
                        this.props.club.data && this.props.club.data.map((item, index) =>
                            <div key={index}>
                                <Route path={`/alumni/${item.title}`}
                                       render={() =>
                                           <div className="small-12 columns"
                                                dangerouslySetInnerHTML={{__html: sanitizeHtml(item.content)}}
                                           />
                                       }
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        club: state.ContentState.GradClub
    }
};

const mapDispatchToProps = dispatch => {
    return {
        GradClubManager: AboutContentManager.bindTo(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GradClubPage));

