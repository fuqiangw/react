import axios from 'axios';
// updateUserApi  put
export const updateUserApi = (url, params = {}) => axios({
	url,
	data: params,
	method: 'post'
})