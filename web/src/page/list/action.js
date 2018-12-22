import * as actionType from './actionType';


export const getProductList = (url, filters) => ({
	type: actionType.GET_PRODUCT_LIST,
	payload: {
		url,
		filters
	}
});


export const getSearchFilterCond = (url) => ({
	type: actionType.GET_SEARCH_FILTER_COND,
	payload: {
		url,
	}
});