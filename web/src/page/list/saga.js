import { take, call, put } from 'redux-saga/effects';

import * as actionType from './actionType';
import { getProductListApi, getSearchFilterApi } from './api';

export function* getProduct(url) {
	return yield call(getProductListApi, url)
}
// getSearchFilterApi
export function* getSearchFilter(url) {
	return yield call(getSearchFilterApi, url)
}

export function* getProductListFlow() {
	while (true) {
		const req = yield take(actionType.GET_PRODUCT_LIST);
		const getReadVal = val => (val === '-1' ? '' : val);
		const res = yield call(getProduct, `${req.payload.url}?regex=${req.payload.filters.keyword}&pageNo=${req.payload.filters.pageNo}&sort=${req.payload.filters.sort}&typeId=${getReadVal(req.payload.filters.type)}`);
		const data = res.data.data.data;
		const total = res.data.page.total;
		console.log(req)

		yield put({
			type: actionType.RESOLVE_GET_PRODUCT_LIST,
			payload: {
				type: req.payload.filters.getType,
				data,
				total,
				isLoaded: true
			}
		});

	}

}



export function* getSearchFilterCondFlow() {
	while (true) {
		const req = yield take(actionType.GET_SEARCH_FILTER_COND);
		const res = yield call(getSearchFilter, req.payload.url);
		const data = res.data.data.data;
		let temp = '';


		if (data.length > 0) {
			temp = {
				data: [
					{
						id: '-1',
						name: '不限类型'
					}
				]
			}
			data.forEach(m => {
				temp.data.push({
					id: m._id,
					name: m.name
				})
			});

		}
		yield put({
			type: actionType.RESOLVE_GET_SEARCH_FILTER_COND,
			payload: {
				data: temp
			}
		});

	}

}

