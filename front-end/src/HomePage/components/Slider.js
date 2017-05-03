import React, {Component} from "react";
import ReactSlider from "react-slick";
import Admin from "../../AdminSection/components/AdminWrapper";
import PropTypes from 'prop-types';

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
                {this.props.sponsors.data && <ReactSlider {...this.sliderSetings}>
                    {
                        this.props.sponsors.data.map((sponsor, index) =>
                            <div key={index} className="sponsor small-6 medium-4 large-3 columns">
                                <Admin type="vip" id={sponsor._id}>
                                    <div className="small-12 sponsor-img columns"/>
                                    <h2 className="small-12">{sponsor.lastName + ' ' + sponsor.firstName}</h2>
                                    <p className="small-12">Спонсор</p>
                                </Admin>
                            </div>
                        )
                    }
                </ReactSlider>
                }
            </div>
        );
    }
}

Slider.propTypes = {
    sponsors: PropTypes.object.isRequired
};
export default Slider;