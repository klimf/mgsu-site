import {createStore} from "redux";
import Reduser from "./reducers/appReducers";

export const store = createStore(Reduser);