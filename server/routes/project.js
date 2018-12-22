
const {
	upload
} = require('../utils');
const path = require('path');
const fs = require('fs');
const router = require('koa-router')();
//   const productType = require('../db/model/productType');
const {
	projectDir,
	downloadServerDir
} = require('../config/server')

//  上传文件测试
router.post('/', async (ctx) => {
	try {
		const file = ctx.request.files.demo; // 获取上传文件
		const body = ctx.request.body;

		// console.log(ctx.request.files);
		// 创建可读流
		const reader = fs.createReadStream(file.path);
		//  path.join(avatatDir, 'test2.jpg')
		let filePath = path.join(projectDir) + `${file.name}`;
		console.log(file);
		//   console.log(reader);
		// 创建可写流
		const upStream = fs.createWriteStream(filePath);
		// 可读流通过管道写入可写流
		reader.pipe(upStream);
		ctx.resp.success(null)
	} catch (e) {
		console.log(e);
		ctx.resp.fail();
	}
})


// 下载文件测试


router.get('/download', async (ctx) => {
	try {
		// const zipPath =  upload.regDblSlash(path.join(downloadServerDir, 'demo.zip'));
		const zipPath = path.join(downloadServerDir, 'demo.zip');
		// console.log(upload.regDblSlash(zipPath))
		ctx.resp.success({ zipPath });
		// http://localhost:6677/public/downloads/demo.zip
	} catch (e) {
		console.log(e);
		ctx.resp.fail();
	}
})








module.exports = router;