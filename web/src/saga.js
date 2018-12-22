import { fork } from 'redux-saga/effects';

import { saga as list } from './page/list';
import { saga as effect } from './page/effect';
import { saga as project } from './page/project';


export default function* rootSaga() {
	yield fork(list.getProductListFlow);
	yield fork(list.getSearchFilterCondFlow);
	yield fork(effect.updateUserFlow);
	yield fork(project.updateFileFlow);
}