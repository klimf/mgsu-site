import React, {Component} from "react";
import "./validationRules";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {User} from "./reducers/UserState";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import ScrollFix from "./components/ScrollFix"

class App extends Component {

    componentDidMount() {
        this.props.UserManager.getCurrent();
    }

    render() {
        return (
           <div>
                <Header {...this.props}/>
                <ScrollFix {...this.props}>
                <Routes {...this.props} />
                </ScrollFix>
                <Footer {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {user} = state.UserState
    return {user}
};

const mapDispatchToProps = dispatch => ({
    UserManager: User.bindTo(dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

