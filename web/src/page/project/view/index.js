import React from 'react';
import { connect } from 'react-redux';
import config from '../../../config';
import { downloadProject } from '../api';


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
			}

		}
	}
	componentDidMount() {
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

function mapseqDataToProps(seqData) {
	return {
		...seqData.home
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateFile
	}, dispatch)

}

export default connect(mapseqDataToProps, mapDispatchToProps)(Project);
