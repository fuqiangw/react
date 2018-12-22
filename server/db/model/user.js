/**
 * user 用户模型
 */
const mongoose = require('mongoose');


const Schema = mongoose.Schema;


var userSchema = new Schema({
	user: {
		type: String,
		// unique: true,
		// required: true,
		comment: '用户名称'
	},
	passworld: {
		type: String,
		comment: '用户密码'
	},
	name: {
		type: String,
		comment: '用户真实姓名'
	},
	avator: {
		type: String,
		comment: '用户logo'
	},
	phone: {
		type: String,
		comment: '手机号码'
	},
	email: {
		type: String,
		comment: '用户邮箱'
	},
	workingStatus: {
		type: Boolean,
		comment: '在职状态'
	}
});
userSchema.statics.getAsCnName = () => '用户表'

module.exports = mongoose.model('user', userSchema, 'user');