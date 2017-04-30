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
import React from "react";
import {jsonServerRestClient, Admin, Resource, Delete} from "admin-on-rest";
import authClient from './authClient';
import {PostList} from "./resources/test";
import {UserList, UserEdit, UserCreate} from "./resources/user";

const AdminSection = () => (
    <Admin title="Админ панель"
           authClient={authClient}
           restClient={jsonServerRestClient('http://jsonplaceholder.typicode.com')}>
        <Resource name="posts"
                  list={PostList}/>
        <Resource name="users"
                  list={UserList}
                  edit={UserEdit}
                  create={UserCreate}
                  remove={Delete}
                  options={{label: 'Пользователи'}}/>
    </Admin>
);

export default AdminSection;
