import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer1 as authReducer} from "./Authentication/reducer"
import {reducer2 as productReducer} from "./Products/reducer"
import thunk from "redux-thunk"


const rootReducer = combineReducers({authReducer,productReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
















// import {applyMiddleware, legacy_createStore} from "redux";
// import { reducer } from "./Authentication/reducer";
// import thunk from "redux-thunk"

// // const mymiddleware = (store)=>(dispatch)=>(action)=>{
// //         if(typeof action === "function"){
// //            return action(dispatch)
// //         }
// //         else{
// //             return dispatch(action)
// //         }
// // }

// export const store = legacy_createStore(reducer,applyMiddleware(thunk));