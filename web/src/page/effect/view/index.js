import React from 'react';
import { connect } from 'react-redux';


import ReactAvatarEditor from 'react-avatar-editor';


import { bindActionCreators } from 'redux';
import { updateUser } from '../action'

import {
	Upload, message, Button, Icon,
} from 'antd';

import './index.less';

class Effect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			choseImg: null,
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
	handleWheel = (e) => {
		console.log(e.deltaY)
		if (e.deltaY > 0) {
			this.setState({
				scale: this.state.scale - 0.1
			})
		}
		if (e.deltaY < 0) {
			this.setState({
				scale: this.state.scale + 0.1
			})
		}
	}
	clickhandleSubmit = () => {
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
			accept: 'image/*',
			beforeUpload: (file) => {
				this.setState({
					choseImg: file,
					avator: 'img'
				})
				return false
			}

		}
		const { choseImg } = this.state;
		return (
			<div className="effect-page clearfix">
				<p className="title">这里要演示的是图片上传功能</p>
				<div className="upload-left">
					<Upload {...uploadprops}>
						<Button>
							<Icon type="upload" /> 上传图片
          </Button>
					</Upload>
				</div>

				<div className="ReactAvatarEditor" onWheel={this.handleWheel}>
					<ReactAvatarEditor
						ref={(node) => { this.editorNode = node; }}
						image={choseImg}
						width={this.state.width}
						height={this.state.height}
						rotate={this.state.rotate}
						scale={this.state.scale}
						borderRadius={this.state.width / (10 / this.state.borderRadius)}
						className="editor-canvas"
					/>
				</div>
				<Button className={this.state.avator ? 'db' : 'dn'} type="primary" onClick={this.clickhandleSubmit}>提交</Button>

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
		updateUser
	}, dispatch)

}

export default connect(mapseqDataToProps, mapDispatchToProps)(Effect);
