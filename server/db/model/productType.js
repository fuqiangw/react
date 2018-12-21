/**
 * 产品  类型
 */
const mongoose = require('mongoose');


const  Schema = mongoose.Schema;


    var ProductTypeSchema = new Schema({          
        name : { 
            type: String ,
            required: true,
            unique: true,
            comment: '产品类型名称'
        },  
        desc : { 
            type: String ,
            comment: '产品类型描述'
        }
    });
    ProductTypeSchema.statics.getAsCnName = () => '项目类型表'
    // 5c19db80750e43a714dbc14a
    // 5c19db90750e43a714dbc14b
    // 5c19db9c750e43a714dbc14cs
    // 5c19db90750e43a714dbc14b

    module.exports = mongoose.model('ProductType',ProductTypeSchema, 'ProductType');