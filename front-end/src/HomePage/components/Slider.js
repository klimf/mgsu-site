import React, {Component} from "react";
import ReactSlider from "react-slick";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.sliderSetings = {
            responsive: [
                {breakpoint: 768, settings: {slidesToShow: 2}},
                {breakpoint: 1024, settings: {slidesToShow: 3}}
            ],
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            accessibility: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            speed: 500
        }
    }

    render() {
        return (
            <div style={{
                margin: '0 auto',
                padding: '40px',
                width: '80%',
                color: '#333',
                background: 'transparent'
            }}>
                <ReactSlider {...this.sliderSetings}>
                    <div><h3 style={{backgroundColor: "#005CA1", height: "90px"}}>1</h3></div>
                    <div><h3 style={{backgroundColor: "#D8666E", height: "90px"}}>2</h3></div>
                    <div><h3 style={{backgroundColor: "#005CA1", height: "90px"}}>3</h3></div>
                    <div><h3 style={{backgroundColor: "#D8666E", height: "90px"}}>4</h3></div>
                    <div><h3 style={{backgroundColor: "#005CA1", height: "90px"}}>5</h3></div>
                    <div><h3 style={{backgroundColor: "#D8666E", height: "90px"}}>6</h3></div>
                </ReactSlider>
            </div>
        );
    }
}

export default Slider;