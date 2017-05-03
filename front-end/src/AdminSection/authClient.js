import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'admin-on-rest';
import {User} from "../common/reducers/UserState";

export default (getUserState ,UserManager) => {

    return (type, params) => {
    // called when the user attempts to  log in
    if (type === AUTH_LOGIN) {
        // return 
        return UserManager.login(params.username, params.password).then((user) => {
            Promise.resolve();
        })
        
    }
    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
         UserManager.logout();
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

        //return (user.data.role  && user.data.role == 1) ? Promise.resolve() : Promise.reject();
            // UserManager.getCurrent().then((user) => {
            //     console.log('FromCurrent',user)
            // })
            
         return ( (user.data &&user.data.role == 1) ? Promise.resolve() : Promise.reject())
        
        }
         return Promise.reject('Unknown method');
    }
   
};
