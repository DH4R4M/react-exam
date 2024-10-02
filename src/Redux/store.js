import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from 'redux-thunk'
import { proReducer } from "./Product/productReducer";
import { loginreducer } from "./Login/loginreducer";


let combine = combineReducers({
    loginreducer: loginreducer,
    proReducer,
})


export const store = legacy_createStore(combine, applyMiddleware(thunk))