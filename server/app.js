const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
// const serve = require('koa-serve-static');
const logger = require('koa-logger');
const koaBody = require('koa-body');
// const serve = require('koa-static')
const routes = require('./routes');
// const path = require('path');



const middleware = require('./middleware');

// const index = require('./routes/index')
// const users = require('./routes/users')
// 下面以koa2-cors为例，
const cors = require('koa2-cors');



require('./db/connect');

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
	enableTypes: ['json', 'form', 'text']
}))
// app.use(bodyparser.urlencoded({ extended: false }))



app.use(koaBody({
	multipart: true,
	formidable: {
		maxFileSize: 200 * 1024 * 1024    // 设置上传文件大小最大限制，默认2M
	}
}));

const {
	response
} = middleware;
console.log('wfq---connect')
app.use(response())

app.use(json())
app.use(logger())

app.use(views(__dirname + '/views', {
	extension: 'pug'
}))

app.use(cors({ credentials: true, origin: true }))

app.use(async (ctx, next) => {
	await next();
})
app.use(response())

// logger
app.use(async (ctx, next) => {
	const start = new Date()
	await next()
	const ms = new Date() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(routes.routes())
app.use(routes.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
	console.error('server error', err, ctx)
});
app.listen(6677);

module.exports = app
