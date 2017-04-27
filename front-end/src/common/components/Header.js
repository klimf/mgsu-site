
import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to="/"
                         activeClassName="selected">
                    <div className="logo-white"/>
                </NavLink>
                <div className="login-btn-icon-white"/>
                <div className="donate-btn-white">Сделать вклад</div>
                <ul className="navigation">
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
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {white} = state.Header;
    return {white}
};

export default withRouter(connect(mapStateToProps)(Header));

import {NavLink, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuIsOpen: false
        }
    }

    handlerMenuClick() {
        this.setState({menuIsOpen: !this.state.menuIsOpen});
    }

    render() {
        return (
            <header>
                <NavLink to="/"
                         activeClassName="selected">
            <div>
            <div className={`overlay large-0" ${this.state.menuIsOpen ? "" : "hide"}`}>
                <h1 className="inline medium-0 large-0">Меню</h1>
                <div className="menu-btn-icon border right"
                     onClick={this.handlerMenuClick.bind(this)}/>
                <NavLink className="overlay-btn" to="/">Сделать вклад</NavLink>
                <NavLink className="overlay-btn" to="/">Войти</NavLink>
                <div className="small-navigation">
                    <NavLink className="small-nav-item" to="/about">О фонде</NavLink>
                    <NavLink className="small-nav-item" to="/projects">Проекты</NavLink>
                    <NavLink className="small-nav-item" to="/sponsors">Благотворители</NavLink>
                    <NavLink className="small-nav-item" to="/club">Клуб выпускников</NavLink>
                    <NavLink className="small-nav-item" to="/news">Новости</NavLink>
                    <NavLink className="small-nav-item" to="/contacts">Контакты</NavLink>
                </div>
            </div>
            <header>
                <NavLink to="/"
                         activeClassName="selected">
                    <div className="logo-white"/>
                </NavLink>
                <div className="login-btn-icon-white"/>
                <div className="donate-btn-white">Сделать вклад</div>
                <ul className="navigation">
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
                <div className="login-btn-icon-white small-0 medium-0"/>
                <div className="menu-btn-icon-white large-0"
                     onClick={this.handlerMenuClick.bind(this)}/>
                <div className="donate-btn-white small-0 medium-0">Сделать вклад</div>
                <div className="navigation small-0 medium-0">
                    <NavLink className="nav-item" to="/about">О фонде</NavLink>
                    <NavLink className="nav-item" to="/projects">Проекты</NavLink>
                    <NavLink className="nav-item" to="/sponsors">Благотворители</NavLink>
                    <NavLink className="nav-item" to="/club">Клуб выпускников</NavLink>
                    <NavLink className="nav-item" to="/news">Новости</NavLink>
                    <NavLink className="nav-item" to="/contacts">Контакты</NavLink>
                </div>
            </header>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {white} = state.Header;
    return {white}
};

export default withRouter(connect(mapStateToProps)(Header));
