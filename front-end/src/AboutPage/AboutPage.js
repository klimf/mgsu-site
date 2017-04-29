import React, {Component, propTypes} from "react";
import { connect, bindActionCreators } from "react-redux";
import { withRouter } from "react-router-dom";
import DonationForm from "./components/DonationForm"
import { DonationsListManager, VipSponsorsManager} from '../common/reducers/PeopleState'
import { PartnersManager} from '../common/reducers/ContentState'


const propTypes = {
    
}

const defaultProps = {}

class SponsorsPage extends Component {

    componentDidMount() {
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

SponsorsPage.propTypes = propTypes

SponsorsPage.defaultProps = defaultProps

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectDetail));

