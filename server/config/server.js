const path = require('path');





const config = {
	ip: process.env.serverIp || 'localhost',
	port: process.env.serverPort || '6677',
	session: {
		key: 'ex.sess',
		maxAge: 24 * 60 * 60 * 1000,
		overwriter: true,
		httpOnly: true,
		sigined: true,
		rolling: true,
		renew: false
	},
	avatatDir: path.join(__dirname, "../public/avatar"),
	projectDir: path.join(__dirname, "../public/project/"),
	downloadServerDir: path.join(__dirname, "../public/downloads")
}


module.exports = config;