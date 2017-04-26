import React, {Component} from "react";
import {NavLink} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false
        }
    }

    handlerMenuClick() {
        this.setState({menuIsOpen: !this.state.menuIsOpen});
        console.log(this.state.menuIsOpen);
    }

    render() {
        return (
            <div>
            <div className={`overlay large-0" ${this.state.menuIsOpen ? "" : "hide"}`}>
                <div className="small-12 small-navigation columns">
                    <NavLink className="small-nav-item" to="/news">Новости</NavLink>
                    <NavLink className="small-nav-item" to="/about">О фонде</NavLink>
                    <NavLink className="small-nav-item" to="/contacts">Контакты</NavLink>
                    <NavLink className="small-nav-item" to="/projects">Проекты</NavLink>
                    <NavLink className="small-nav-item" to="/sponsors">Благотворители</NavLink>
                    <NavLink className="small-nav-item" to="/club">Клуб выпускников</NavLink>
                    <div className="menu-btn-icon"
                         onClick={this.handlerMenuClick.bind(this)}/>
                </div>
            </div>
            <header>
                <NavLink to="/"
                         activeClassName="selected">
                    <div className="logo-white"/>
                </NavLink>
                <div className="login-btn-icon-white small-0 medium-0"/>
                <div className="menu-btn-icon-white large-0"
                     onClick={this.handlerMenuClick.bind(this)}/>
                <div className="donate-btn-white small-0 medium-0">Сделать вклад</div>
                <div className="navigation small-0 medium-0">
                    <NavLink className="nav-item" to="/news">Новости</NavLink>
                    <NavLink className="nav-item" to="/about">О фонде</NavLink>
                    <NavLink className="nav-item" to="/contacts">Контакты</NavLink>
                    <NavLink className="nav-item" to="/projects">Проекты</NavLink>
                    <NavLink className="nav-item" to="/sponsors">Благотворители</NavLink>
                    <NavLink className="nav-item" to="/club">Клуб выпускников</NavLink>
                </div>
            </header>
            </div>
        );
    }
}


export default Header;
