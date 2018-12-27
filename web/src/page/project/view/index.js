import React from 'react';
import { connect } from 'react-redux';
import config from '../../../config';
import { downloadProject } from '../api';
import watermark from 'water-mark-oc'


// import ReactAvatarEditor from 'react-avatar-editor';


import { bindActionCreators } from 'redux';
import { updateFile } from '../action'

import {
	Upload, message, Button, Icon,
} from 'antd';

import './index.less';

class Project extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			choseFile: null,
			width: 250,
			height: 250,
			scale: 1,
			borderRadius: 250,
			rotate: 0,
			avator: null,
			position: {
				x: 0.5,
				y: 0.5
			},
			title: '2'

		}
	}
	componentDidMount() {
		// 水印测试
		watermark({ 
			content: 'demo waterMark',
			width: 222,
			height: 400 ,
			// textAlign: false // 
			rotate: -12,
			zIndex: 899999999
		}); 
	}
	static  getDerivedStateFromProps (nextProps, prevState) { 
		// 这意味着即使你的props没有任何变化
		// 而是state发生了变化，导致组件发生了re-render，这个生命周期函数依然会被调用
		// 该函数不能访问this  因为是静态函数
		console.log(this);
		console.log(nextProps);
		console.log(prevState);
		return 'www';
	}
	getSnapshotBeforeUpdate (prevProps, prevState) {
		// 首次渲染时不会调用 每次render之前调用   一定要有返回值	 
		console.log('wwwwwwwww');
		return 'snapshot' // 此处的返回值可以在 生命周期的componentDidUpdate第三个参数中获取
	}
	componentDidUpdate(prevProps, prevState, snapshot){
		console.log(snapshot)
	}
	download = (zipPath) => {
		const filterProjectName = (path) => {
			if (path) {
				return /([^<>/\\|:""*?]+)\.\w+$/.exec(path)[1];
			}
		}
		const link = document.createElement('a');
		link.href = zipPath;
		// link.href = '../../../../../server/public/downloads/demo.zip';
		// link.href = filterProjectName(zipPath);
		link.style.visibility = 'hidden';
		link.download = filterProjectName(zipPath);
		console.log(link.href);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);



	}

	projectdownload = () => {
		console.log('下载文件');
		downloadProject('/projectfiles/download').then((res) => {
			console.log(res.data.data);
			const { zipPath } = res.data.data;
			this.download(zipPath);
		})
		// window.open('/download/1.png');
	}
	handleClickDemo = () => {
		this.setState({
			title: 'wwwwww'
		})
	}
	clickhandleSubmit = () => {
		console.log(this.state.choseFile)
		if (this.editorNode) {
			console.log(this.editorNode.getImageScaledToCanvas().toDataURL());
			const img = this.editorNode.getImageScaledToCanvas().toDataURL();
			this.setState({
				avator: img
			});
			this.props.updateUser('/user/update', { avator: img })
		}

	}

	render() {
		const uploadprops = {
			accept: '.zip', // 上传的形式
			action: '/projectfiles',
			name: 'demo',
			onChange: (info) => {
				console.log(info)
			}

		}
		const { choseImg } = this.state;
		return (
			<div className="effect-page clearfix">
				<p className="title">这里要演示的是文件上传</p>

				<p className="title">{this.state.title}</p>


				<Button onClick={this.handleClickDemo}>
							<Icon type="upload" /> 测试
          				</Button>
				{/* 这里演示的是 测试 */}
				<div className="upload-left">
					<Upload {...uploadprops}>
						<Button>
							<Icon type="upload" /> 上传文件
          				</Button>
					</Upload>
				</div>



				<Button onClick={this.projectdownload}>
					<Icon type="upload" /> 下载文件
          				</Button>

			</div>
		);
	}
}

function mapStateToProps(seqData) {
	return {
		...seqData.home
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateFile
	}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
