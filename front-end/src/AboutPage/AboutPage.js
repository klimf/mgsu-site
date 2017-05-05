import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {AboutContentManager} from "../common/reducers/ContentState";
import {OurTeamManager} from "../common/reducers/PeopleState";
import {Route} from "react-router";
import {resolveStatic} from "../common/helpers";


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
        if(this.props.location.pathname === '/about' && this.props.about.data){
            this.props.history.push(`/about/${this.props.about.data[0].title}`);
        }
        return (
            <div className="page row expanded">
                <div className="small-12 space-3 columns"/>
                <div className="content small-12 row">
                    <div className="projects-navigation">
                        {
                            this.props.about.data && this.props.about.data.map((item, index) =>
                                <NavLink to={`/about/${item.title}`} className="projects-nav-item"
                                         key={index}>
                                    {item.title}
                                </NavLink>
                            )
                        }
                        <NavLink to={`/about/Наша команда`} className="projects-nav-item">
                            Наша команда
                        </NavLink>
                    </div>
                    {
                        this.props.about.data && this.props.about.data.map((item, index) =>
                            <div key={index}>
                                <Route path={`/about/${item.title}`}
                                       render={() =>
                                           <div className="small-12 columns"
                                                dangerouslySetInnerHTML={{__html: item.content}}
                                           />
                                       }
                                />
                            </div>
                        )
                    }
                    <Route path={`/about/Наша команда`}
                           render={() =>
                               <div>
                                   <div className="small-12 space-3 columns"/>
                                   {
                                       this.props.team.data &&
                                       this.props.team.data.map((person, index) =>
                                           <div key={index} className="sponsor small-6 medium-4 large-3 columns end">
                                               <div className="small-12 sponsor-img columns placeholder-img" style={{
                                                   background: `url(${person.img && resolveStatic(person.img.small)})`
                                               }}/>
                                               <h2 className="small-12">{person.firstName + ' ' + person.lastName + ' ' + person.middleName}</h2>
                                               <p className="small-12">Описание: {person.description}</p>
                                           </div>
                                       )

                                   }
                               </div>
                           }
                    />
                    <Route exact path={`/about`}
                           render={() =>
                               <div className="small-12 columns">
                                   <h1 className="small-12 uppercase center columns">Что-то о фонде</h1>
                                   <p>
                                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur assumenda
                                       consectetur corporis dolores doloribus, enim est eum excepturi obcaecati
                                       perferendis provident quae quisquam ratione, veritatis voluptatum. Commodi
                                       inventore libero natus!
                                   </p>
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

