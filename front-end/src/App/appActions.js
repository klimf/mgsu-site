import {createAction} from "redux-act";

export const User = {
    change: createAction("change user data", (user) => ({user}))
}
