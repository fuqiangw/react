// 上传
// const fs = require('fs')
// const { config } = require('../config');

// const {
//     ip,
//     port
//   } = config.server;
  const {
    ip,
    port
  } = require('../config/server')


// const mongoose = require('mongoose');
const upload = {
    
    regDblSlash (str) {
        const publicPath = str.replace(/\\/g, '/');

        console.log(publicPath);
        return `http://${ip}:${port}${publicPath}`;
    }
}

module.exports = upload