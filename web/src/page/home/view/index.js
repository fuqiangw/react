import React from 'react';
import axios from 'axios';
import './index.less';
import { connect } from 'react-redux';
import { Link, Prompt, NavLink } from 'react-router-dom'
import BroadCast from '../../../component/broadCast/BroadCast'
import { bindActionCreators } from 'redux';
import { getProjectInfo, getProjectInfo1, getCrease } from '../action';
import Zmage from 'react-zmage'

import './index.less'

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '首页HOME'
		}
	}
	componentDidMount() {
		console.log(this.props);
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
					<div className="broadcast-wrap">
						<BroadCast />
					</div>
					<div className="Zmage-wrap">
						<Zmage
						className="Zmage-wrap"
							src="asstes/images/banner01.jpg"
							alt="最简单的使用方式"
						/>
					</div>
					<div className="linkDemoBox">

					测试link: <Link to="/list" className="link" replace >跳转到list</Link>
					{/* // replace : 当设置为 true 时，点击链接后将替换历史堆栈中的当前条目，而不是添加新条目。默认为 false。 */}



					测试NavLink:<NavLink className="navLink" to="/list" exact activeClassName="selected">跳转到list</NavLink>
					{/* activeClassName:	当元素处于激活状态时应用的类，默认为 active。它将与 className 属性一起使用。 */}
					{/* exact: bool 如果为 true，则只有在位置完全匹配时才应用激活类/样式。 */}
					{/* isActive: func */}



					<Prompt message="你确定要离开当前页面吗？" />
					</div>


					{/* 使用 <Redirect> 会导航到一个新的位置。新的位置将覆盖历史堆栈中的当前条目，例如服务器端重定向（HTTP 3xx）。 */}
				
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
