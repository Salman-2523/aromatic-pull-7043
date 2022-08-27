

import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { criclyticsReducer } from "./criclyticsReducer/reducer";
import { sheduleReducer } from "./sheduleReducer/reducer";
import {seriesReducer} from './seriesreducer/reducer'
import { newsReducer } from "./newsReducer/reducer";

const rootReducer=combineReducers({
    sheduleReducer:sheduleReducer,
    criclyticsReducer:criclyticsReducer,
    seriesReducer:seriesReducer,
    newsReducer: newsReducer

});

const combineEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(rootReducer, combineEnhancer(applyMiddleware(thunk)));

