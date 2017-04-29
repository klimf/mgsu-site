import React from 'react'
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import Donators from "./AccountDepartments/Donators"


const AdminAccount = props => (
             <div>
                <ul>
                    <li>
                        <NavLink to={`${props.match.url}/donators`}>Благотворители</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path={`${props.match.url}/`} component={Donators}/>
                 </Switch>
            </div>
)


export default AdminAccount
