import React, {Component} from "react";
import {connect} from "react-redux";
import {GradClubManager} from "../common/reducers/ContentState";
import {withRouter, NavLink} from "react-router-dom";
import {Route} from "react-router";

class GradClubPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        this.props.GradClubManager.get();
    }

    render() {
        if(this.props.location.pathname === '/alumni' && this.props.gradClub.data){
            this.props.history.push(`/alumni/${this.props.gradClub.data[0].title}`);
        }
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        {
                            this.props.gradClub.data && this.props.gradClub.data.map((item, index) =>
                                <NavLink to={`/alumni/${item.title}`} className="projects-nav-item"
                                         key={index}>
                                    {item.title}
                                </NavLink>
                            )
                        }
                    </div>
                    {
                        this.props.gradClub.data && this.props.gradClub.data.map((item, index) =>
                            <div key={index}>
                                <Route path={`/alumni/${item.title}`}
                                       render={() =>
                                           <div className="small-12 columns"
                                                dangerouslySetInnerHTML={{__html: item.content}}
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
        gradClub: state.ContentState.GradClub,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        GradClubManager: GradClubManager.bindTo(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GradClubPage));
