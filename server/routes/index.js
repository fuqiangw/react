const router = require('koa-router')()
// const Role = require('../db/model/role');

const product = require('./product');
const productType = require('./productType');
const userUpdate = require('./userUpdate');
const project = require('./project');





// 产品 模块  
router.use(
	'/product',
	product.routes(),
	product.allowedMethods()
)

router.use(
	'/productType',
	productType.routes(),
	productType.allowedMethods()
)

router.use(
	'/user',
	userUpdate.routes(),
	userUpdate.allowedMethods()
)

router.use(
	'/projectfiles',
	project.routes(),
	project.allowedMethods()
)



module.exports = router
