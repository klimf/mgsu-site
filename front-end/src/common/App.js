import React, {Component} from "react";
import "./validationRules";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {User} from "./reducers/UserState";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import ScrollFix from "./components/ScrollFix";
import {NewsManager, EventsManager, AboutContentManager, GradClubManager} from './reducers/ContentState';
import {VipSponsorsManager, OurTeamManager, ContactsManager} from './reducers/PeopleState';

class App extends Component {

    componentDidMount() {
        this.props.UserManager.getCurrent();
    }


    render() {
        return (
           <div>
                <Header {...this.props} />
                <ScrollFix {...this.props}>
                <Routes {...this.props} />
                </ScrollFix>
                <Footer {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserState,
        news: state.NewsState,
        events: state.EventsState,
    }
};

const mapDispatchToProps = dispatch => ({
    UserManager: User.bindTo(dispatch),
    NewsManager: NewsManager.bindTo(dispatch),
    EventsManager: EventsManager.bindTo(dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

