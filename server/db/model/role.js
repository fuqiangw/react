/**
 * 角色信息
 */
const mongoose = require('mongoose');


const  Schema = mongoose.Schema;


    var RoleSchema = new Schema({          
        username : { 
            type: String ,
            comment: '用户名'
        },  
        userage : { 
            type: String ,
            comment: '用户年龄'
        }, 
        english : { 
            type: Number ,
            comment: '英语成绩'
        },
        match : { 
            type: Number ,
            comment: '数学成绩'
        },                             
        likes : { 
            type: String ,
            comment: '兴趣爱好'
        },
        idcard : { 
            type: String ,
            comment: '身份证号码'
        },
        phone : { 
            type: String ,
            comment: '手机号码'
        },
    });

    module.exports = mongoose.model('Role',RoleSchema);