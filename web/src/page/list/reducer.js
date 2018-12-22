import { combineReducers } from "redux";
import * as actionType from './actionType';


function resolveGetProductList(state = {
	data: [],
	total: 0,
	isLoaded: false
}, action) {
	switch (action.type) {
		case actionType.RESOLVE_GET_PRODUCT_LIST:
			console.log(action)
			return {
				data: action.payload.type === 1 ? state.data.concat(action.payload.data) : action.payload.data,
				total: action.payload.total,
				isLoaded: action.payload.isLoaded,
			};
		default:
			return state
	}
}
function resolveGetFilterCond(state = {}, action) {
	switch (action.type) {
		case actionType.RESOLVE_GET_SEARCH_FILTER_COND:
			return action.payload.data;
		default:
			return state
	}
}
export default combineReducers({
	productList: resolveGetProductList,
	filterCond: resolveGetFilterCond,
});