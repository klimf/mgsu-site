import React, {Component} from "react";
import "./validationRules";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {User} from "./reducers/UserState";
import {connect} from 'react-redux';

class App extends Component {

    componentDidMount() {
        this.props.UserManager.getCurrent();
    }

    render() {
        return (
            <div>
                <Header user={this.props.user} UserManager={this.props.UserManager}/>
                <Routes user={this.props.user} UserManager={this.props.UserManager}/>
                <Footer user={this.props.user} UserManager={this.props.UserManager}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const user = state.UserState
    return user
}

const mapDispatchToProps = dispatch => ({
    UserManager: User.bindTo(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

