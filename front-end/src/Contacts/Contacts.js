import React, {Component} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";


class ContactsPage extends Component {
    componentDidMount() {
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.contacts.data
        ////////////////////////////////////////////////
        //
        // _id,
        // firstName,
        // lastName,
        // middleName,
        // description
        // ...
        // 
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <h1 className="uppercase center small-12 columns">Наша команда</h1>
                    <div className="small-12 space-2 columns"/>
                    <div className="team-grid small-12 columns">
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Программист</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                        <div className="sponsor small-6 medium-4 large-3 columns">
                            <div className="small-12 sponsor-img columns end"/>
                            <h2 className="small-12">Паша Техник</h2>
                            <p className="small-12">Спонсор</p>
                        </div>
                    </div>
                </div>
                <div className="content small-12 row">
                    <div className="small-12 space-3 columns"/>
                    <div className="huge-text uppercase center small-6 columns">
                        Карта
                    </div>
                    <div className="contacts-block small-6 border bg-white columns">
                        <h3 className="uppercase center">Контакты</h3>
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
                        <div className="space-2"/>
                    </div>
                </div>
                <div className="small-12 expanded">
                    <iframe className="iframe-map"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAH0TpAzPZLkOHi2623tYV3Edn-nBCIM2k&q=НИУ+МГСУ">
                    </iframe>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

}

const mapStateToProps = state => {
    const {key} = state
    return {key}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactsPage));
