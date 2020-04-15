import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';

import {ticketsReducer} from "./reducers/ticketsReducer";

export const store = createStore(
    ticketsReducer,
    composeWithDevTools(),
);