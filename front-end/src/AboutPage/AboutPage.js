import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {AboutContentManager} from "../common/reducers/ContentState";
import {OurTeamManager} from "../common/reducers/PeopleState";
import {Route} from "react-router";
import sanitizeHtml from "sanitize-html";


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
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.AboutContentManager.get();
        this.props.OurTeamManager.get();
    }

    render() {
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        <NavLink to={`/about/Наша команда`} className="projects-nav-item">
                            Наша команда
                        </NavLink>
                        {
                            this.props.about.data && this.props.about.data.map((item, index) =>
                                <NavLink to={`/about/${item.title}`} className="projects-nav-item"
                                         key={index}>
                                    {item.title}
                                </NavLink>
                            )
                        }
                    </div>
                    {
                        this.props.about.data && this.props.about.data.map((item, index) =>
                            <div key={index}>
                                <Route path={`/about/${item.title}`}
                                       render={() =>
                                           <div className="small-12 columns"
                                                dangerouslySetInnerHTML={{__html: sanitizeHtml(item.content)}}
                                           />
                                       }
                                />
                            </div>
                        )
                    }
                    <Route path={`/about/Наша команда`}
                           render={() =>
                               <div>
                                   {
                                       this.props.team.data &&
                                       this.props.team.data.map((person, index) =>
                                           <div key={index}>
                                               <div>
                                                   ФИО: {person.firstName + ' ' + person.lastName + ' ' + person.middleName}</div>
                                               <div></div>
                                               <div>Описание: {person.description}</div>
                                           </div>
                                       )
                                   }
                               </div>
                           }
                    />
                </div>
            </div>
        )
    }
}

AboutPage.defaultProps = defaultProps;

const mapStateToProps = state => {
    return {
        about: state.ContentState.About,
        team: state.PeopleState.OurTeam
    }
};

const mapDispatchToProps = dispatch => {
    return {
        AboutContentManager: AboutContentManager.bindTo(dispatch),
        OurTeamManager: OurTeamManager.bindTo(dispatch)
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutPage));

