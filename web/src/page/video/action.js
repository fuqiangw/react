
import * as actionType from './actionType'

export const getVideoList = (url, ctype) => ({
    type: actionType.GET_VIDEO_INFO,
    payload: {
        url,
        ctype
    }
});