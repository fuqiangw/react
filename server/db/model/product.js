/**
 * 产品
 */
const mongoose = require('mongoose');


const  Schema = mongoose.Schema;


    var ProductSchema = new Schema({          
        name : { 
            type: String ,
            comment: '名字'
        },  
        desc : { 
            type: String ,
            comment: '描述'
        }, 
        volume : { 
            type: Number ,
            comment: '销量'
        },
        sale : { 
            type: Number ,
            comment: '售价'
        },
        cover: {
            type: String ,
            comment: '封面图片'
        },
        productType: {
            type: Schema.Types.ObjectId,
            required: true,
            comment: '产品类型id'
        }
    });
    ProductSchema.statics.getAsCnName = () => '产品表'

    module.exports = mongoose.model('Product',ProductSchema, 'Product');