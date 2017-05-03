import React, {Component} from "react";
import {connect} from "react-redux";
import {bindAll} from "redux-act";
import Slider from "./components/Slider";
import {formatMoney} from "../common/helpers";
import {headerActions} from "../common/components/state";
import {FundDetailManager} from "../common/reducers/ProjectsState";
import {NewsManager, EventsManager, PartnersManager} from "../common/reducers/ContentState";
import {VipSponsorsManager} from "../common/reducers/PeopleState";
import {NavLink, withRouter} from "react-router-dom";
import {resolveStatic, formatEventDate} from "../common/helpers";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.hexaNames = [
            'Образование',
            'Наука',
            'Студенты',
            'Стипендии',
            'Инфраструктура',
            'Спорт',
            <div>Проффессора и <br /> преподаватели</div>
        ];

        this.styles = {
            startShowing: 'active',
            resetDelays: 'active delay-0'
        };

        this.state = {
            hexaStyle: '',
            scrollTop: 0
        };

        this.bindedScrollHandler = this.scrollFunc.bind(this);
        window.addEventListener("scroll", this.bindedScrollHandler);

    }

    scrollFunc() {
        this.setState({
            scrollTop: window.pageYOffset
        })
    };

    componentWillMount() {
        this.props.FundDetailManager.getDetail();
        this.props.NewsManager.get();
        this.props.EventsManager.get();
        this.props.VipSponsorsManager.get();
        this.props.PartnersManager.get();

    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.bindedScrollHandler);
    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({
                hexaStyle: this.styles.startShowing
            });
        }, 100);
        setTimeout(() => {
            this.setState({
                hexaStyle: this.styles.resetDelays
            });
        }, 600);


    }

    componentDidUpdate(prevProps, prevState) {

    }


    fundValue() {
        return (this.props.fundDetail.data.given / this.props.fundDetail.data.need) * 100;
    }

    getNews(limit) {
        return this.props.news.data ? this.props.news.data.slice(0, limit) : []
    }

    getEvents(limit) {
        return this.props.events.data ? this.props.events.data.slice(0, limit) : []
    }

    handlerHexaClick(index, name) {
        this.setState({hexaStyle: ''}, () => {
            this['tempDiv' + index].classList.add('active', 'delay-0');
            setTimeout(() => {
                this['tempDiv' + index].classList.add('expand');
                setTimeout(() => {
                    this.props.history.push('/projects/' + name)
                }, 400)
            }, 200)
        });
    }

    render() {

        return (
            <div className="page row expanded">
                <div classID="wide-img" className="wide-img small-12 expanded"
                     style={{backgroundPosition: "center " + -this.state.scrollTop / 2 + "px fixed"}}>
                    <div className="blackout"/>
                    <div className="main-progress">
                        <div className="bar-wrap">
                            {this.fundValue() < 80 &&
                            <div className="bar-label" style={{width: `${this.fundValue()}%`}}>
                                <div className="donate-btn-icon-white"></div>
                                <h1 className="uppercase bar-text bar-left">
                                    <p className="uppercase">Размер фонда</p>
                                    {formatMoney(this.props.fundDetail.data.given)}₽
                                </h1>
                            </div>
                            }

                            <div className="bar-fact primary" style={{width: `${this.fundValue()}%`}}></div>

                        </div>


                        <h1 className="uppercase bar-text bar-right bar-text--right">

                            {this.fundValue() > 80 &&
                            <div className="tooLargeValue">
                                <div className="donate-btn-icon-white--tooLargeValue"></div>
                                <h1 className="uppercase bar-text bar--tooLagreValue">
                                    <p className="uppercase">Размер фонда</p>
                                    {formatMoney(this.props.fundDetail.data.given)}₽
                                </h1>
                            </div>
                            }

                            <p className="uppercase">Цель</p>
                            {formatMoney(this.props.fundDetail.data.need)}₽
                        </h1>

                    </div>
                    <div className="content small-12 row">
                        <h1 className="small-12 white uppercase center columns">Направления для поддержки</h1>
                        <div className="hexagon-grid small-12 columns">
                            {
                                this.hexaNames.map((name, index) =>
                                    <div key={index}
                                         ref={(div) => this['tempDiv' + index] = div}
                                         className={`small-3 columns end hexagon-container delay-${index} ${this.state.hexaStyle}`}
                                         onClick={this.handlerHexaClick.bind(this, index, name)}>
                                        <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1"
                                             xmlns="http://www.w3.org/2000/svg">{/*getRandomInt(0, 7)*/}
                                            <polygon
                                                points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                        </svg>
                                        <h3>{name}</h3>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="hexagon-bg-container small-12 row expanded absolute no-overflow">
                    <svg className="hexagon-bg" viewBox="-24 -24 254 287" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{top: -500, transform: `translateY(${ this.state.scrollTop / 5 }px)`}}>
                        <polygon
                            points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                    </svg>
                    <svg className="hexagon-bg small-0 medium-0" viewBox="-24 -24 254 287" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{top: 0, transform: `translateY(${ this.state.scrollTop / 3 }px)`}}>
                        <polygon
                            points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                    </svg>
                    <svg className="hexagon-bg" viewBox="-24 -24 254 287" version="1.1"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{top: 600, transform: `translateY(${ this.state.scrollTop / 4 }px)`}}>
                        <polygon
                            points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                    </svg>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                    <img alt="pic" src={require("../media/blocks/how-it-works.png")}
                         className="small-12 columns small-0"/>
                    <img alt="pic" src={require("../media/blocks/how-it-works-mobile.png")}
                         className="small-12 columns medium-0 large-0"/>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                    <div className="small-12 medium-12 large-7 columns padding-left m-b-3">
                        {this.getNews(5).map(({img, title, description}) =>
                            < div className="home-news small-12 columns">
                                <div className="bg-img placeholder-img"
                                     style={img && {backgroundImage: "url(" + resolveStatic(img.small) + ")"}}
                                />
                                <div className="blackout"/>
                                <h2>{title}</h2>
                                <p>
                                    {description}
                                </p>
                            </div>
                        )
                        }
                        <NavLink className="h3 underline" to="/news">Все новости</NavLink>
                    </div>
                    <div className="small-12 medium-12 large-5 columns padding-right m-b-3">
                        {this.getEvents(5).map(({date, title, description}) =>
                            <div className="home-event small-12 columns">
                                <div className="bg-border"/>
                                <h1>{formatEventDate(date).day}</h1>
                                <h2>{formatEventDate(date).month}</h2>
                                <p>
                                    {title}
                                </p>
                            </div>
                        )}
                        <NavLink className="h3 underline" to="/events">Все мероприятия</NavLink>
                    </div>

                </div>
                <div className="space-2"/>
                <div className="content small-12 row">
                    <h1 className="uppercase center">Спонсоры</h1>
                    <Slider/>
                </div>
                <div className="space-4"/>
                <div className="content small-12 row">
                    <div className="corps-grid small-12 columns">
                        <img src={require("../media/images/corps/1.png")} alt=""/>
                        <img src={require("../media/images/corps/2.png")} alt=""/>
                        <img src={require("../media/images/corps/3.png")} alt=""/>
                        <img src={require("../media/images/corps/4.png")} alt=""/>
                        <img src={require("../media/images/corps/5.png")} alt=""/>
                        <img src={require("../media/images/corps/6.png")} alt=""/>
                        <img src={require("../media/images/corps/7.png")} alt=""/>
                        <img src={require("../media/images/corps/8.png")} alt=""/>
                        <img src={require("../media/images/corps/9.png")} alt=""/>
                    </div>
                    {/*<img alt="pic" src={require("../media/images/corps.png")}*/}
                         {/*className="small-12 small-0 medium-0 hover-opacity columns"/>*/}
                    {/*<img alt="pic" src={require("../media/images/corps-mobile.png")}*/}
                         {/*className="small-12 large-0 hover-opacity columns"/>*/}
                </div>
                <div className="space-4"/>
            </div>
        );
    }
}

// HomePage.defaultProps = {
//     fundDetail: {
//         data: {
//             given: 123000000,
//             need: 224000000
//         }
//     }
// };

const mapStateToProps = state => {
    return {
        partners: state.ContentState.Partners,
        vipSpinsors: state.PeopleState.VipSpinsors,
        fundDetail: state.ProjectsState.fundDetail,
        events: state.EventsState,
        news: state.NewsState
    }
};

const mapDispatchToProps = dispatch => {
    return {
        FundDetailManager: FundDetailManager.bindTo(dispatch),
        VipSponsorsManager: VipSponsorsManager.bindTo(dispatch),
        PartnersManager: PartnersManager.bindTo(dispatch),
        NewsManager: NewsManager.bindTo(dispatch),
        EventsManager: EventsManager.bindTo(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);