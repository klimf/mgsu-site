import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Routes from "./Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
         <Routes/>
       <Footer/>
      </div>
    );
  }
}

export default App;
