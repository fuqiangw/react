import axios from "axios";

export const getVideoInfoApi = (url, params = {}) => axios({
    url,
    methods,
    data: params
})