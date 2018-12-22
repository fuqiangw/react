import * as actionType from './actionType';

export const getProjectInfo = (ctype, urlObj) => ({
	type: actionType.GET_PROJECT_INFO,
	payload: {
		ctype,
		urlObj
	}
});
export const getProjectInfo1 = (ctype, urlObj) => ({
	type: actionType.GET_PROJECT_INFO,
	payload: {
		ctype,
		urlObj
	}
});


export const getCrease = (state) => ({
	type: actionType.INCREASE,
	state
});