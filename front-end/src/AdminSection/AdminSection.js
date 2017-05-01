/*import React from 'react'
 import {Switch} from "react-router";
 // import AdminAccount from "./components/AdminAccount";
 // import FormsSection from "./components/FormsSection";


 const AdminSection = props => (
 <Switch>
 {/!*<Route exact path={`${props.match.url}/`} component={AdminAccount}/>*!/}
 {/!*<Route  path={`${props.match.url}/forms`} component={FormsSection}/>*!/}
 </Switch>
 )*/

import React, { Component, PropTypes } from 'react'
import {jsonServerRestClient, Admin, Resource, Delete} from "admin-on-rest";
import authClient from './authClient';
import {PostList} from "./resources/test";
import {UserList, UserEdit, UserCreate} from "./resources/user";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import efRestClient from "./efRestClient"




class AdminSection extends Component {

    getUserState() {
        return this.props.user;
    }

    render() {
        return (
            <Admin title="Кабинет администратора"
                   authClient={authClient(this.getUserState.bind(this), this.props.dispatch)}
                   restClient={efRestClient}>
                <Resource name="posts"
                        list={PostList}/>
                <Resource name="users"
                        list={UserList}
                        edit={UserEdit}
                        create={UserCreate}
                        remove={Delete}
                        options={{label: 'Пользователи'}}/>
            </Admin>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.UserState.data
    } 
}

export default withRouter(connect(mapStateToProps)(AdminSection));
