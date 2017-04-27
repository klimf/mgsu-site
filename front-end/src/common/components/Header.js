import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerIsWhite: this.props.location.pathname === '/'
        };
    }

    componentDidUpdate() {
        if (this.state.headerIsWhite !== (this.props.location.pathname === '/')) {
            this.setState({
                headerIsWhite: this.props.location.pathname === '/'
            });
        }
    }

    render() {
        return (
            <header className={this.state.headerIsWhite ? 'header--white' : null}>
                <NavLink to='/'>
                    <div className="logo-white"/>
                </NavLink>
                <div className="login-btn-icon-white"/>
                <div className="donate-btn-white">Сделать вклад</div>
                <ul className="navigation">
                    <li className="nav-item">Новости</li>
                    <li className="nav-item">О фонде</li>
                    <li className="nav-item">Контакты</li>
                    <NavLink to="/projects">
                        <li className="nav-item">Проекты</li>
                    </NavLink>
                    <li className="nav-item">Благотворители</li>
                    <li className="nav-item">Клуб выпускников</li>
                </ul>
            </header>
        );
    }
}


const mapStateToProps = (state) => {
    const {white} = state.Header;
    return {white}
};

export default withRouter(connect(mapStateToProps)(Header));
