import React from 'react';
// import { NavLink } from "react-router-dom";
import Masonry from "react-masonry-component";
import Card from '../Card';
import $ from 'jquery';
import './index.less';

class MasonryCard extends React.Component {
	constructor() {
		super();
		this.state = {
			index: 3,
			masonryOptions: {
				transitionDuration: 0,
				gutter: 20
			}

		}
	}

	componentDidMount() {
		const that = this;
		$(window).scroll(function () {
			const scrollTop = $(this).scrollTop();
			const scrollHeight = $(document).height();
			const windowHeight = $(this).height();
			if (scrollTop + windowHeight >= scrollHeight) {
				that.props.bottomTrigger();
			}
		});
	}


	renderNewLoad = (data) => {
		console.log(this.props);
		const array = [];
		data.forEach((element, i) => {
			array.push(<Card key={i} data={element} />)
		});
		return array;
	}
	render() {
		const { data, isLoaded, isNeedLoad } = this.props;
		const { masonryOptions } = this.state;
		if (isLoaded === false) return false;
		return (
			<div className="masonry-wrap">
				<div className="card-wrap clearfix">
					<Masonry options={masonryOptions}>
						{
							data && this.renderNewLoad(data)
						}
					</Masonry>
				</div>
				<div className="more">
					<div>
						{isNeedLoad ? '加载更多' : '没有更多了'}
					</div>
				</div>
			</div>
		)
	}
}
export default MasonryCard;
