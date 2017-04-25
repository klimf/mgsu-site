import React, {Component} from "react";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/"><div className="logo-white inline left pointer"/></Link>
                <div className="login-btn-white border-small-white inline right pointer transition-1 hover-primary"/>
                <div
                    className="donate-btn-white w-200 border-small-white inline right pointer h3 uppercase center white transition-1 hover-primary">
                    Сделать вклад
                </div>
                <ul className="navigation">
                    <li className="nav-item inline uppercase underline h3 white pointer">Новости</li>
                    <li className="nav-item inline uppercase underline h3 white pointer">О фонде</li>
                    <li className="nav-item inline uppercase underline h3 white pointer">Контакты</li>
                    <li className="nav-item inline uppercase underline h3 white pointer"><Link to="/projects">Проекты</Link></li>
                    <li className="nav-item inline uppercase underline h3 white pointer">Благотворители</li>
                    <li className="nav-item inline uppercase underline h3 white pointer">Клуб выпускников</li>
                </ul>
            </header>
        );
    }
}


export default Header;
