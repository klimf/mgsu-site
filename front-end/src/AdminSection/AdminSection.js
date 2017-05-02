
import React, {Component, PropTypes} from "react";
import {Admin, Resource, Delete, simpleRestClient} from "admin-on-rest";
import russianMessages from "aor-language-russian";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import efRestClient from "./efRestClient";
import authClient from "./authClient";
import {ProjectList, ProjectEdit, ProjectCreate} from "./resources/projects";
import {PostList, PostEdit, PostCreate} from "./resources/posts";
import {ContactList, ContactEdit, ContactCreate} from "./resources/contacts";
import {PrivilegeList, PrivilegeEdit, PrivilegeCreate} from "./resources/privileges";
import {DontaionList, DontaionEdit, DontaionCreate} from "./resources/donations";
import mgsuTheme from './components/mgsuTheme';
import {AboutCreate, AboutList, AboutEdit} from "./resources/about"
const messages = {
    'ru': russianMessages,
};


class AdminSection extends Component {

    getUserState() {
        return this.props.user;
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        return (
            <Admin theme={mgsuTheme}
                  locale='ru' messages={messages}
                   title={`Кабинет администратора ${this.props.user.data.firstName} ${this.props.user.data.lastName}`}
                   
                   restClient={efRestClient}>
                <Resource name="projects"
                           options={{ label: 'Проекты' }}
                          list={ProjectList}
                          edit={ProjectEdit}
                          create={ProjectCreate}
                          remove={Delete}/>
                 <Resource name="posts/?category=about"
                          options={{ label: 'Страница о фонде' }}
                          list={AboutList}
                          edit={AboutEdit}
                          create={AboutCreate}
                          remove={Delete}/>
            </Admin>
        )
    }
}

AdminSection.propTypes = {
    UserManager: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {}
}

export default withRouter(connect(mapStateToProps)(AdminSection));
