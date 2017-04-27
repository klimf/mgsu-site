import React, {Component} from "react";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="logo-white"/>
                <div className="mgsu-logo-white"/>
                <div className="contacts">
                    <div className="contact">
                        <p>Адрес</p>
                        <h3>119049, г. Москва, Ярославское ш., 26</h3>
                    </div>
                    <div className="contact">
                        <p>Телефон</p>
                        <h3>+7 (495) 781-99-88</h3>
                    </div>
                    <div className="contact">
                        <p>Почта</p>
                        <h3>ef@mgsu.ru </h3>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;