import * as actionType from './actionType.js'

export const updateFile = (url, data) => ({
    type: actionType.UPDATE_USERMSGFILE,
    payload: {
        url,
        data
    }
});



