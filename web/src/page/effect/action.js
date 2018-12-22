import * as actionType from './actionType.js'

export const updateUser = (url, data) => ({
	type: actionType.UPDATE_USERMSG,
	payload: {
		url,
		data
	}
});



