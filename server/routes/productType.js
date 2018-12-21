
const productType = require('../db/model/productType');
// const ProductType = require('../db/model/productType')

const router = require('koa-router')()

// 获取全部
router.get('/', async (ctx, ) => {
  try {
    const recode = await productType
      .find()
      .exec()
      ctx.resp.success({
        data: recode 
      })
    
  } catch (e) {
    console.log(e);
    ctx.resp.fail();
  }
})


//  更新用户信息
router.get('/update', async (ctx) => {
    try {
  
      // const body = ctx.request.body;
      // const avator = body.avator;
  
      // console.log(avator)
  
      const recode = await productType
        .find()
        .exec()
        ctx.resp.success({
          data: recode 
        })
     
      
      
    } catch (e) {
      console.log(e);
      ctx.resp.fail();
    }
  })



module.exports = router;