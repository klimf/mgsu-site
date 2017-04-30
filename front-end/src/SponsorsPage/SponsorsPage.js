import React, {Component} from "react";
import { connect, bindActionCreators } from "react-redux";
import { withRouter } from "react-router-dom";
import { DonationsListManager, VipSponsorsManager} from '../common/reducers/PeopleState'
import { PartnersManager} from '../common/reducers/ContentState'



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
            <div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
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

