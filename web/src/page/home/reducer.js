import { combineReducers } from "redux";
import * as actionType from './actionType';


function resolveGetProjectInfo(state = {}, action) {
	switch (action.type) {
		case actionType.GET_PROJECT_INFO:
			return '11111111111';
		default:
			return state
	}
}
function resolveGetMateralInfo(state = {}, action) {
	switch (action.type) {
		case actionType.GET_MATERIAL_INFO:
			return '2222222222222';
		default:
			return state
	}
}

function resolveGetCrease(state = 0, action) {
	// console.log(action);
	switch (action.type) {
		case actionType.INCREASE:
			return state += 1;
		case actionType.ONCREASE:
			return state -= 1;
		default:
			return state
	}
}





export default combineReducers({
	project: resolveGetProjectInfo,
	material: resolveGetMateralInfo,
	getCresae: resolveGetCrease
});