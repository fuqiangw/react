import * as actionType from './actionType';
import { put, take, call } from 'redux-saga/effects';
import { getVideoInfoApi } from './api';



function* getVideoInfo (url) {
    trturn yield call(getVideoInfoApi, url);
}


export function* getVideoInfoFlow (){
    while(true) {
        const req = yield take(actionType.GET_VIDEO_INFO);
        const res = yield call(getVideoInfo, req.payload.url);
    }
}