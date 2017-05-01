import React, {Component, propTypes} from "react";
import {connect, bindActionCreators} from "react-redux";
import {withRouter} from "react-router-dom";
import {DonationsListManager, VipSponsorsManager} from '../common/reducers/PeopleState'
import {PartnersManager} from '../common/reducers/ContentState'

const defaultProps = {
    directions: [
        'Что такое эндаумент фонд?',
        'Миссия и цели',
        'Схема работы',
        'Отчетность',
        'Команда',
        'Преимущества',
        'Документы',
        'Контакты'
    ]

};

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
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        {
                            this.props.directions.map((filter, index) =>
                                <div className="projects-nav-item"
                                     key={index}>
                                    {filter}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }


}

AboutPage.defaultProps = defaultProps;

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
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutPage));

