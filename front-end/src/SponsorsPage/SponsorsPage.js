import React, {Component} from "react";
import {connect, bindActionCreators} from "react-redux";
import {withRouter} from "react-router-dom";
import {DonationsListManager, VipSponsorsManager} from '../common/reducers/PeopleState'
import {PartnersManager} from '../common/reducers/ContentState'
import Slider from "../HomePage/components/Slider";


class SponsorsPage extends Component {

    componentDidMount() {
        this.props.DonationsListManager.get();
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.donations обычные спонсоры в таблицу
        ////////////////////////////////////////////////
        //
        // _id,
        // user: {
        // _id,
        // firstName,
        // lastName,
        // middleName,
        //  }
        // project: {
        //    _id,
        //    name,
        //      ...
        // }
        // value - сколько пожертвовал
        // recursive - ежемесясно или нет
        // date - дата
        // 
        // 
        this.props.VipSponsorsManager.get();
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.vipSponsors 
        ////////////////////////////////////////////////
        //
        // _id,
        // firstName,
        // lastName,
        // middleName,
        // description,
        // img: {
        //     original,
        //     small
        // },
        // 
        this.props.PartnersManager.get();
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.vipSponsors 
        ////////////////////////////////////////////////
        //
        // _id,
        // img: {
        //     original,
        //     small
        // },
        // s
        // ...
        // 
    }


    render() {
        return (
            <div className="page row expanded">
                <div className="space-3"/>
                <div className="content small-12 row">
                    <h1 className="uppercase center">Компании - партнеры</h1>
                    <div className="space-2"/>
                    <img alt="pic" src={require("../media/images/corps.png")}
                         className="small-12 small-0 medium-0 columns"/>
                    <img alt="pic" src={require("../media/images/corps-mobile.png")}
                         className="small-12 large-0 columns"/>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                    <h1 className="uppercase center">Спонсоры</h1>
                    <Slider/>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                    <h1 className="uppercase center">Благотворители</h1>
                    <div className="donations-table-container">
                        <table className="donations-table small-12 columns">
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                            <tr>
                                <td>Имя</td>
                                <td>Проект</td>
                                <td>Сумма</td>
                                <td>Время</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="space-3"/>
            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        donations: state.PeopleState.DonationsList,
        partners: state.ContentState.Partners,
        vipSpinsors: state.PeopleState.VipSpinsors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        DonationsListManager: DonationsListManager.bindTo(dispatch),
        VipSponsorsManager: VipSponsorsManager.bindTo(dispatch),
        PartnersManager: PartnersManager.bindTo(dispatch),

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SponsorsPage));

