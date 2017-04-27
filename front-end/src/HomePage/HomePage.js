import React, {Component} from "react";
import Slider from "./components/Slider";
import {getRandomInt, formatMoney} from "../common/helpers";

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
        }, 600)
    }

    handlerHexaClick(index) {
        this.setState({hexaStyle: ''}, () => {
            this['tempDiv' + index].classList.add('active', 'delay-0');
            setTimeout(() => {
                this['tempDiv' + index].classList.add('expand');
                setTimeout(() => {
                    //this.props.history.push('/projects')
                }, 400)
            }, 200)
        });
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="wide-img small-12 expanded">
                    <div className="blackout"/>
                    <div className="main-progress">
                        <div className="bar primary">
                        </div>
                        <div className="bar" style={{width: 100 - 60 + "%"}}>
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
                                         onClick={this.handlerHexaClick.bind(this, index)}>
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
                <div className="content small-12 row">
                    <br/>
                    <br/>
                    <img src={require ("../media/blocks/how-it-works.png")} className="small-12"/>
                </div>
                <div className="content small-12 row">

                </div>

                <Slider/>
            </div>
        );
    }
}

export default HomePage;