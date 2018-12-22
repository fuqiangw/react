import axios from 'axios';
// updateFileApi  put
export const updateFileApi = (url, params = {}) => axios({
	url,
	data: params,
	method: 'post'
})

export const downloadProject = (url, params = {}) => axios(url, params)