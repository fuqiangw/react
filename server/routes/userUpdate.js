
// const users = require('../db/model/user');
const {
  image
} = require('../utils');
const path = require('path');
const router = require('koa-router')();
const productType = require('../db/model/productType');
const {
  avatatDir
} = require('../config/server')

//  更新用户信息
router.post('/update', async (ctx) => {
  try {

    const body = ctx.request.body;
    const avator = body.avator;

    // base64 转 图片
    if (avator) {
     
      image.decodeBase64(avator, path.join(avatatDir, 'test2.jpg'));
    }

    // console.log(avator);

    // const recode = await productType
    //   .find()
    //   .exec()
      ctx.resp.success(null)
   
    
    
  } catch (e) {
    console.log(e);
    ctx.resp.fail();
  }
})




module.exports = router;