import React, {Component, propTypes} from "react";
import { connect, bindActionCreators } from "react-redux";
import { withRouter } from "react-router-dom";
import { DonationsListManager, VipSponsorsManager} from '../common/reducers/PeopleState'
import { PartnersManager} from '../common/reducers/ContentState'




class AboutPage extends Component {

    componentDidMount() {
        /////////////////////////////////////////////////
        // ФОРМАТ this.props.about.data
        ////////////////////////////////////////////////
        //
        // _id,
        // title,
        // content
        // ...
        // 

        /////////////////////////////////////////////////
        // ФОРМАТ this.props.aboutTeam.data
        ////////////////////////////////////////////////
        //
        // _id,
        // firstName,
        // lastName,
        // middleName,
        // description
        // ...
        // 

        /////////////////////////////////////////////////
        // ФОРМАТ this.props.about.targets.data
        ////////////////////////////////////////////////
        //
        // _id,
        // firstName,
        // lastName,
        // middleName,
        // description
        // content
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutPage));

