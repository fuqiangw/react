import { take, call, put } from 'redux-saga/effects';

import * as actionType from './actionType';
import { updateFileApi } from './api';

export function* updateFile(url, data) {
	return yield call(updateFileApi, url, data)
}


export function* updateFileFlow() {
	while (true) {
		const req = yield take(actionType.UPDATE_USERMSGFILE);
		const res = yield call(updateFile, req.payload.url, req.payload.data);

		console.log(req.payload.data)

		console.log(res);


	}

}


