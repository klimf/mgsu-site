import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {bindAll} from "redux-act";
import Slider from "./components/Slider";
import {formatMoney} from "../common/helpers";
import {headerActions} from "../common/components/state";


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
            'Проффессора и преподаватели'
        ];
        this.styles = {
            startShowing: 'active',
            resetDelays: 'active delay-0'
        };
        this.state = {
            hexaStyle: ''
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                hexaStyle: this.styles.startShowing
            });
        }, 200);
        setTimeout(() => {
            this.setState({
                hexaStyle: this.styles.resetDelays
            });
        }, 600);

        // window.addEventListener("scroll", function(){
        //     parallax();
        // });
        //
        // function parallax() {
        //     let $slider = document.getElementById("wide-img");
        //
        //     let yPos = window.pageYOffset / 3;
        //     yPos = -yPos;
        //
        //     let coords = '0% '+ yPos + 'px';
        //
        //     $slider.style.backgroundPosition = coords;
        //     console.log("Scroll");
        // }

        this.props.headerAct.dyeWhite();
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
                <div classID="wide-img" className="wide-img small-12 expanded">
                    <div className="blackout"/>
                    <div className="main-progress">
                        <div className="bar primary">
                        </div>
                        <div className="bar" style={{ width: 100 - 60 + "%" }}>
                            <div className="donate-btn-icon-white"/>
                            <h1 className="uppercase bar-text bar-left">
                                <p className="uppercase">Размер фонда</p>
                                {formatMoney(256000000)}₽
                            </h1>
                            <h1 className="uppercase bar-text bar-right">
                                <p className="uppercase">Цель </p>
                                {formatMoney(320000000)}₽
                            </h1>
                        </div>
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
                         xmlns="http://www.w3.org/2000/svg">{/*getRandomInt(0, 7)*/}
                        <polygon
                            points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                    </svg>
                    <svg className="hexagon-bg" viewBox="-24 -24 254 287" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">{/*getRandomInt(0, 7)*/}
                        <polygon
                            points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                    </svg>
                    <svg className="hexagon-bg" viewBox="-24 -24 254 287" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">{/*getRandomInt(0, 7)*/}
                        <polygon
                            points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                    </svg>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                    <img alt="pic" src={require("../media/blocks/how-it-works.png")} className="small-12"/>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                    <div className="small-12 medium-12 large-7 columns padding-left">
                        <div className="home-news small-12 columns">
                            <div className="bg-img"/>
                            <div className="blackout"/>
                            <h2>Альбом выпускников</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <div className="home-news small-12 columns">
                            <div className="bg-img"/>
                            <div className="blackout"/>
                            <h2>Альбом выпускников</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <div className="home-news small-12 columns">
                            <div className="bg-img"/>
                            <div className="blackout"/>
                            <h2>Альбом выпускников</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <div className="home-news small-12 columns">
                            <div className="bg-img"/>
                            <div className="blackout"/>
                            <h2>Альбом выпускников</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <a className="h3 underline" href="/news">Показать все</a>
                    </div>
                    <div className="small-12 medium-12 large-5 columns padding-right">
                        <div className="home-event small-12 columns">
                            <div className="bg-border"/>
                            <h1>19</h1>
                            <h2>Апреля</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <div className="home-event small-12 columns">
                            <div className="bg-border"/>
                            <h1>23</h1>
                            <h2>Апреля</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <div className="home-event small-12 columns">
                            <div className="bg-border"/>
                            <h1>27</h1>
                            <h2>Апреля</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <div className="home-event small-12 columns">
                            <div className="bg-border"/>
                            <h1>29</h1>
                            <h2>Апреля</h2>
                            <p>
                                В июле 2017 года будет подготовлен необычный альбом выпускников — CV-book, в котором
                                работодатель сможет посмотреть
                            </p>
                        </div>
                        <a className="h3 underline" href="/events">Показать все</a>
                    </div>

                </div>
                <div className="space-2"/>
                <div className="content small-12 row">
                    <h1 className="uppercase center">Спонсоры</h1>
                    <Slider/>
                </div>
                <div className="space-4"/>
                <div className="content small-12 row">
                    <img alt="pic" src={require("../media/images/corps.png")} className="small-12 hover-opacity"/>
                </div>
                <div className="space-4"/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    {headerAct: bindAll(headerActions, dispatch)});


const mapStateToProps = state => {
    const { data } = state.ProjectsState.fundDetail
    return {data}
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)