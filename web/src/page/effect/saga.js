import { take, call, put } from 'redux-saga/effects';

import * as actionType from './actionType';
import { updateUserApi } from './api';

export function* updateUser(url, data) {
	return yield call(updateUserApi, url, data)
}


export function* updateUserFlow() {
	while (true) {
		const req = yield take(actionType.UPDATE_USERMSG);
		const res = yield call(updateUser, req.payload.url, req.payload.data);

		console.log(req.payload.data)

		console.log(res);


	}

}


