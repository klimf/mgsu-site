import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {VipSponsorsManager, DonationsListManager} from "../common/reducers/PeopleState";
import {PartnersManager} from "../common/reducers/ContentState";
import Slider from "../HomePage/components/Slider";
import {resolveStatic} from '../common/helpers';
import {ActionBar, EditableItem} from '../AdminSection/components/AdminToolbar';
import {formatMoney, formatDate} from '../common/helpers';




class SponsorsPage extends Component {

    componentWillMount() {
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
        // ФОРМАТ this.props.partners.data
        ////////////////////////////////////////////////
        //
        // _id,
        // img: {
        //     original,
        //     small
        // },
        // title
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
                     <ActionBar type='partners' actions={['create']}></ActionBar>
                     {this.props.partners.data && this.props.partners.data.map(({img, title, _id}, index) => 
                         <EditableItem key={index} type='partners' id={_id} actions={['edit', 'delete']}>
                            <img  src={resolveStatic(img.small)} alt={title}/>
                         </EditableItem>
                        )}
                    {/*<img alt="pic" src={require("../media/images/corps.png")}
                         className="small-12 small-0 medium-0 columns"/>
                    <img alt="pic" src={require("../media/images/corps-mobile.png")}
                         className="small-12 large-0 columns"/>*/}
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                     <ActionBar type='vip' actions={['create']}></ActionBar>
                    <h1 className="uppercase center">Спонсоры</h1>
                    <Slider sponsors={this.props.vipSponsors}/>
                </div>
                <div className="space-3"/>
                <div className="content small-12 row">
                     <ActionBar type='donation' actions={['create']}></ActionBar>
                    <h1 className="uppercase center">Благотворители</h1>
                    <div className="donations-table-container">
                        <table className="donations-table small-12 columns">
                            <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Проект</th>
                                <th>Сумма</th>
                                <th>Время</th>
                            </tr>
                            </thead>
                            <tbody>
                           {this.props.donations.data && this.props.donations.data.map((item, index) =>
                                <tr key={index}>
                                    <td>{`${item.user.firstName} ${item.user.lastName} ${item.user.middleName}`}</td>
                                    <td>{item.project.name}</td>
                                    <td>{`${formatMoney(item.value)} ${item.recursive && 'в месяц'}`}</td>
                                    <td>{formatDate(item.date)}</td>
                                </tr>
                            )}
                            
                           </tbody>
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
        vipSponsors: state.PeopleState.VipSponsors
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

