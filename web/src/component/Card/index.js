import React from 'react';
import './index.less';

class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 3

		}
	}
	render() {
		const { data } = this.props;

		return (
			<div className="result-card">
				<div className="thumbnail">
					<img src={data.cover ? `/asstes/images/${data.cover}` : "/asstes/images/test1.jpg"} alt="tupian" />
				</div>
				<p>商品名称:{data.name}</p>
				<p>商品描述:{data.desc}</p>
				<p>商品销量:{data.volume}</p>
				<p>商品售价:{data.sale}</p>
			</div>
		)
	}
}
export default Card; 
