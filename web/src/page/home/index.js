import React from 'react';
import axios from 'axios';
import './home.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProjectInfo, getProjectInfo1, getCrease } from './action';

import './index.less'

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '首页HOME'
		}
	}
	componentDidMount() {
		this.reqData = {
			type: '1',
			ctype: 0,
			id: 'jjj',
			likeType: 0
		}
		this.sendReq(this.reqData);
	}

	componentDidUpdate() {
		console.log('wwwwwwwww');
	}

	sendReq = ({ ctype, type, id }) => {
		// console.log(this.props);

		// console.log(ctype);
		// console.log(type);
		// console.log(id);
		this.props.getProjectInfo(
			ctype,
			{
				info: 'this is info link',
				likes: 'this is likes link'
			}
		)
	}




	increase = () => {
		console.log('increSE');
		this.props.getCrease('INCREASE');
		// console.log(this.props);
	}

	oncrease = () => {
		console.log('oncreSE');
		this.props.getCrease('ONCREASE');
		// console.log(this.props);

	}





	handleClickAddData = () => {
		// console.log('ajax====send===sucess');
		this.AddData();
		console.log(this.nameNode.value);
		console.log(this.pswNode.value);
	}
	handleClickgetData = () => {
		axios.get("string")
			.then((r) => {
				// response.data.data;
				console.log(r.data);
			})
			.catch(function (error) {
				console.log(error);
			})
	}
	AddData = () => {
		// console.log('gggggggg');
		axios.post("addData", {
			username: this.nameNode.value,
			psw: this.pswNode.value
		})
			.then((r) => {
				// response.data.data;
				console.log(r);
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	render() {
		const { title } = this.state;
		return (
			<div>
				<div className="home-page">
					<div>姓名 <input ref={(node) => { this.nameNode = node; }} type="text" name="lname" /></div>
					<div>密码 <input type="text" ref={(node) => { this.pswNode = node; }} name="lname" /></div>
					<p onClick={this.handleClickAddData}>新增一条数据</p>
					<p onClick={this.handleClickgetData}>查询所有数据</p>
					<p >{title}</p>
					<p >下面是测试redux</p>
					<div className="demo-redux">
						<span onClick={this.increase}>-</span>
						<span>{this.props.getCresae}</span>
						<span onClick={this.oncrease}>+</span>
					</div>

				</div>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		...state.list,
		...state.home
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getProjectInfo,
		getProjectInfo1,
		getCrease
	}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
