import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { global_reducer, auth_reducer, business_reducer, invoice_reducer } from "./"


export default createStore(combineReducers({
	global: global_reducer,
	auth: auth_reducer,
	business: business_reducer,
	invoice: invoice_reducer  
}), applyMiddleware(thunk));
