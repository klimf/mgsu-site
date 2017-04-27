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
                margin: '0',
                padding: '0',
                width: '100%',
                background: 'transparent'
            }}>
                <ReactSlider {...this.sliderSetings}>
                    <div className="sponsor small-6 medium-4 large-3 columns">
                        <div className="small-12 sponsor-img columns"/>
                        <h2 className="small-12">Паша Техник</h2>
                        <p className="small-12">Спонсор</p>
                    </div>
                    <div className="sponsor small-6 medium-4 large-3 columns">
                        <div className="small-12 sponsor-img columns"/>
                        <h2 className="small-12">Паша Техник</h2>
                        <p className="small-12">Спонсор</p>
                    </div>
                    <div className="sponsor small-6 medium-4 large-3 columns">
                        <div className="small-12 sponsor-img columns"/>
                        <h2 className="small-12">Паша Техник</h2>
                        <p className="small-12">Спонсор</p>
                    </div>
                    <div className="sponsor small-6 medium-4 large-3 columns">
                        <div className="small-12 sponsor-img columns"/>
                        <h2 className="small-12">Паша Техник</h2>
                        <p className="small-12">Спонсор</p>
                    </div>
                    <div className="sponsor small-6 medium-4 large-3 columns">
                        <div className="small-12 sponsor-img columns"/>
                        <h2 className="small-12">Паша Техник</h2>
                        <p className="small-12">Спонсор</p>
                    </div>
                </ReactSlider>
            </div>
        );
    }
}

export default Slider;