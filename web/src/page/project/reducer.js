import { combineReducers } from "redux";
import * as actionType from './actionType';



function resolveupdateFile(state = {}, action){
    switch(action.type) {
        case actionType.RESOVE_UPDATE_USERMSGFILE:
        return action.payload.data; 
        default: 
        return state
    }
}
export default combineReducers({
    updateFile: resolveupdateFile
});