import React, {Component} from "react";

/*Components*/
//import Slider from "./components/Slider";

class HomePage extends Component {
    render() {
        return (
            <div className="page row expanded">
                <div className="wide-img small-12 expanded">
                    <div className="blackout"/>
                    <div className="main-progress">
                        <div className="bar primary">
                        </div>
                        <div className="bar" style={{width:100 - 60+"%"}}>
                            <h1 className="uppercase bar-text bar-left">
                                <p className="uppercase">Размер фонда</p>
                                256 000 000₽
                            </h1>
                            <h1 className="uppercase bar-text bar-right">
                                <p className="uppercase">Цель      </p>
                                320 000 000₽  
                            </h1>
                        </div>
                    </div>
                    <div className="content small-12 row">
                        <h1 className="white uppercase center">Направления для поддержки</h1>
                        <div className="small-12 columns">
                            <div className="small-3 columns end hexagon-container active delay-1 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3>Образование</h3>
                            </div>
                            <div className="small-3 columns end hexagon-container active delay-4 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3>Наука</h3>
                            </div>
                            <div className="small-3 columns end hexagon-container active delay-0 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3>Студенты</h3>
                            </div>
                            <div className="small-3 columns end hexagon-container active delay-2 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3>Стипендии</h3>
                            </div>
                            <div className="small-3 columns end hexagon-container active delay-3 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3>Инфраструктура</h3>
                            </div>
                            <div className="small-3 columns end hexagon-container active delay-6 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3>Спорт</h3>
                            </div>
                            <div className="small-3 columns end hexagon-container active delay-5 delay-0">
                                <svg className="hexagon" viewBox="-10 -10 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                                </svg>
                                <h3 className="small-12 absolute uppercase white columns  no-margin">Проффессора и преподаватели</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content small-12 row">
                    <h1>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    </h1>
                </div>
                {/*<Slider/>*/}
            </div>
        );
    }
}

export default HomePage;