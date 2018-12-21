
const Product = require('../db/model/product');
// const ProductType = require('../db/model/productType');
const {
  mongo
} = require('../utils');

const defaultPageNo = 1;
const defaultPageSize = 12;
const router = require('koa-router')()

// 获取全部
router.get('/', async (ctx, next) => {
  try {
    const query = ctx.request.query;
    const { sort, regex, typeId } = query;
    console.log(ctx.request.body)

    const pageNo = query.pageNo ? +query.pageNo : defaultPageNo;
    const pageSize = query.pageSize ? +query.pageSize : defaultPageSize;


    const queryCond = {

    }


    // const regex = query.regex;
    // 搜索项处理
    if(regex) {
      queryCond.$or =[
        { name: { $regex: regex, $options: 'i' } },
        { desc: { $regex: regex, $options: 'i' } }
      ]

    }
    
// 筛选
    typeId &&  (queryCond.productType = mongo.ObjectId(typeId));
    // match 形式  {
    //   score: {
    //     $gt: 80
    //   }
    // }

    // score 为表中 的字段



    const pipeline = [
      {
        $match: queryCond
      },
      {
        $skip: (pageNo -1) * pageSize
      },
      {
        $limit: pageSize
      }
    ]
    if (sort && sort === '1') { // 销售量排序
      pipeline.splice(3,0, {
        $sort: {
          volume: -1
        }
      })
    } else if (sort && sort === '3') { // 售价排序
      pipeline.splice(3,0, {
        $sort: {
          sale: -1
        }
      })
    }
//  total 返回给前台
    const ret = await Product
      .aggregate( [{
        $match: queryCond
      }])

    const recode = await Product
      .aggregate(pipeline)
      .exec()
      ctx.resp.success(
        {
          data: recode
        },
        {
          total: ret.length,
          pageNo: pageNo,
          pageSize:pageSize
        }
      )
    
  } catch (e) {
    console.log(e);
    ctx.resp.fail();
  }
})



module.exports = router;