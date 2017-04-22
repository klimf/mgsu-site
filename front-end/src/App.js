import React, {Component} from "react";

/*Components*/
import Header from './common/components/Header'
import Footer from './common/components/Footer'
import HomePage from './HomePage/HomePage';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <HomePage/>
                <Footer/>
            </div>
        );
    }
}

export default App;
