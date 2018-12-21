// image 图片管理
const fs = require('fs')

// const mongoose = require('mongoose');
const image = {
    // base64 图片转码
    decodeBase64(imgData ='',  imgPath) {
        const base64Data = imgData.replace(/^data:image\/\w+;base64,/, '');
        const dataBuffer = new Buffer(base64Data , 'base64');
        fs.writeFileSync(imgPath, dataBuffer )

    }
}

module.exports = image