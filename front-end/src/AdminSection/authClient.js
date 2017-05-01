import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import {User} from "../common/reducers/UserState";

export default (getUserState, dispatch) => {
    User.bindTo(dispatch);
    return (type, params) => {
    // called when the user attempts to  log in
    if (type === AUTH_LOGIN) {
        // return 
        return Promise.resolve();
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        //  return 
        return Promise.resolve();
    }
    // called hen the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            return Promise.resolve();
        }
        return Promise.reject();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
            const user = getUserState();
            console.log(user);
        return Promise.resolve();

    }
    return Promise.reject('Unknown method');
};
}