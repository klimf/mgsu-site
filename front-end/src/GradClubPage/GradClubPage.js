import React, {Component} from "react";
import {connect} from "react-redux";
import {GradClubManager} from "../common/reducers/ContentState";
import {withRouter, NavLink} from "react-router-dom";
import {Route} from "react-router";
import sanitizeHtml from "sanitize-html";



class GradClubPage extends Component {

    componentWillMount() {
        this.props.GradClubManager.get();
    }


    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        {
                            this.props.gradClub.data && this.props.gradClub.data.map((item, index) =>
                                <NavLink to={`/alumni/${item.title}`} className="projects-nav-item"
                                         key={index}>
                                    {item.title}
                                </NavLink>
                            )
                        }
                    </div>
                    {
                        this.props.gradClub.data && this.props.gradClub.data.map((item, index) =>
                            <div key={index}>
                                <Route path={`/alumni/${item.title}`}
                                       render={() =>
                                           <div className="small-12 columns"
                                                dangerouslySetInnerHTML={{__html: sanitizeHtml(item.content)}}
                                           />
                                       }
                                />
                            </div>
                        )
                    }
                    <Route exact path={`/alumni`}
                           render={() =>
                               <div className="small-12 columns">
                                   <h1 className="small-12 uppercase center columns">Ассоциация выпускников</h1>
                                   <p>
                                       Решением Ученого совета от 23 сентября 2001 г. в НИУ МГСУ сформирована
                                       Ассоциация выпускников МГСУ-МИСИ – организация, осуществляющая связь
                                       вуза с его выпускниками, привлекающая выпускников к общественной жизни
                                       университета, к решению его насущных задач, к воспитательной работе по
                                       формированию мировоззрения молодых специалистов, сохранению лучших
                                       традиций университета.
                                       Кроме того, Ассоциация оказывает действенную поддержку выпускникам вуза
                                       в их профессиональном росте и установлении деловых связей.
                                       Таким образом, Ассоциация выпускников МГСУ-МИСИ является связующим
                                       звеном между подготовленными нами специалистами и партнерами вуза.
                                       В рамках подготовки к различным мероприятиям Ассоциация выпускников
                                       МГСУ-МИСИ (АВ) возобновляет работу по привлечению в свои ряды новых
                                       членов Ассоциации. Выпускники МГСУ-МИСИ, мы ждем Ваших откликов!
                                       Ваше желание стать членом Ассоциации, не терять связь с МГСУ и обрести
                                       возможность активно участвовать в жизни своего любимого вуза легко
                                       осуществимо. Заполните данные о себе в анкете или свяжитесь с нами по
                                       контактному номеру.
                                       Президент Ассоциации выпускников – президент МГСУ Теличенко Валерий
                                       Иванович(?).
                                   </p>
                               </div>
                           }
                    />
                </div>
            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        gradClub: state.ContentState.GradClub,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        GradClubManager: GradClubManager.bindTo(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GradClubPage));
