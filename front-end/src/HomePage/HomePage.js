import React, {Component} from "react";

/*Components*/
import Slider from "./components/Slider";

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                    <h1>Слайдер:</h1>
                    <div></div>
                    <Slider/>
                </div>
            </div>
        );
    }
}

export default HomePage;