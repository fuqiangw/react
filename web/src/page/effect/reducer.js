import { combineReducers } from "redux";
import * as actionType from './actionType';



function resolveupdateUser(state = {}, action) {
	switch (action.type) {
		case actionType.RESOVE_UPDATE_USERMSG:
			return action.payload.data;
		default:
			return state
	}
}
export default combineReducers({
	updateUser: resolveupdateUser
});