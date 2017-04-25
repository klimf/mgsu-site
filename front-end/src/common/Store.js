import { createStore } from 'redux';
import {bindAll} from "redux-act";
import * as actions from  './appActions';
import  Reduser from "./appReducers";


export const store = createStore(Reduser);


