import React, {Component} from "react";

/*Components*/
import Slider from "./components/Slider";

class HomePage extends Component {
    render() {
        return (
            <div className="page row expanded">
                <div className="wide-img small-12 expanded">
                    <div className="blackout"></div>
                    <div className="content small-12 row">
                        <h1 className="white uppercase center">Направления для поддержки</h1>
                        <div className="small-12 columns">
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                            <svg className="hexagon" viewBox="-16 -16 240 273" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <polygon id="path-1" points="220 189.919571 220 63.1099196 110 0 0 63.1099196 0 189.919571 110 253.029491"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <Slider/>
            </div>
        );
    }
}

export default HomePage;