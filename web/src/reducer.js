import { combineReducers } from "redux";
import home from './page/home/reducer'
import list from './page/list/reducer';
import effect from './page/effect/reducer'
import project from './page/project/reducer'

// root    reducer 



export default combineReducers({
	home,
	list,
	effect,
	project
});