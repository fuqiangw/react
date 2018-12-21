const path = require('path');





const config = {
    ip: process.env.serverIp || 'localhost',
    port: process.env.serverPort || '6677',
    avatatDir: path.join(__dirname, "../public/avatar"),
    projectDir: path.join(__dirname, "../public/project/"),
    downloadServerDir: path.join(__dirname, "../public/downloads")
}


module.exports = config;