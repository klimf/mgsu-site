import React, {Component, PropTypes} from "react";
import {Admin, Resource, Delete, simpleRestClient} from "admin-on-rest";
import russianMessages from "aor-language-russian";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import efRestClient from "./efRestClient";
import {ProjectList, ProjectEdit, ProjectCreate} from "./resources/projects";
import {DontaionList, DontaionEdit, DontaionCreate} from "./resources/donations";
import mgsuTheme from './components/mgsuTheme'
import {contentsCategories} from "./resources/contents"
import {peopleTeams} from "./resources/team.js"
import ResourcesSet from './components/ResourcesSet';
import authClient from './authClient';


const messages = {
    'ru': russianMessages,
};


class AdminSection extends Component {

    getUserState() {
        return this.props.user;
    }

    componentDidUpdate() {
    }

    render() {
        console.log(peopleTeams)
        return (
            <Admin theme={mgsuTheme}
                   locale='ru' messages={messages}
                   title={`Кабинет администратора ${this.props.user.data.firstName} ${this.props.user.data.lastName}`}
                   authClient={authClient(this.getUserState.bind(this), this.props.UserManager)}
                   restClient={efRestClient}>
                <Resource name="projects"
                          options={{label: 'Проекты'}}
                          list={ProjectList}
                          edit={ProjectEdit}
                          create={ProjectCreate}
                          remove={Delete}/>

                { Object.keys(peopleTeams).map((key, index) =>

                    (<Resource name={key}
                               options={{label: peopleTeams[key].label}}
                               list={peopleTeams[key].component.list}
                               edit={peopleTeams[key].component.edit}
                               create={peopleTeams[key].component.create}
                               remove={Delete}/>
                    ))

                }
                { Object.keys(contentsCategories).map((key, index) =>

                    (<Resource name={key}
                               options={{label: contentsCategories[key].label}}
                               list={contentsCategories[key].component.list}
                               edit={contentsCategories[key].component.edit}
                               create={contentsCategories[key].component.create}
                               remove={Delete}/>
                    ))

                }

            </Admin>
        )
    }
}

AdminSection.propTypes = {
    UserManager: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {}
};

export default withRouter(connect(mapStateToProps)(AdminSection));
