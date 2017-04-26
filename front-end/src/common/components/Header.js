import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <div className="overlay"></div> fixme
                <NavLink to="/"
                         activeClassName="selected">
                    <div className="logo-white"/>
                </NavLink>
                <div className="login-btn-icon-white small-0 medium-0"/>
                <div className="menu-btn-icon-white large-0"/>
                <div className="donate-btn-white small-0 medium-0">Сделать вклад</div>
                <ul className="navigation small-0 medium-0">
                    <li className="nav-item">Новости</li>
                    <li className="nav-item">О фонде</li>
                    <li className="nav-item">Контакты</li>
                    <NavLink to="/projects"
                             activeClassName="selected">
                        <li className="nav-item">Проекты</li>
                    </NavLink>
                    <li className="nav-item">Благотворители</li>
                    <li className="nav-item">Клуб выпускников</li>
                </ul>
            </header>
        );
    }
}


export default Header;
