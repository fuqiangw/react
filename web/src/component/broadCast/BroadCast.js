import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/dist/css/swiper.min.css'
import './BroadCast.less';

class BroadCast extends React.Component {
	constructor() {
		super();
		this.state = {
			options: {
				loop: true,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			},
			data: {
				cover: 'cover',
				imgs:
					[
						'/asstes/images/banner01.jpg',
						'/asstes/images/banner02.jpg',
						'/asstes/images/banner04.jpg',
						'/asstes/images/banner03.jpg',
						'/asstes/images/banner08.jpg',
					]

			}
		}
	}
	render() {
		const { data, options } = this.state;
		return (
			<div className="BroadCast-content">

				<Swiper {...options} >
					{
						data.imgs.map((m, i) => (
							<div  key={i} className="BroadCast-poster">
								<img src={m} alt={m} />
							</div>
						))
					}
				</Swiper>
			</div>

		)
	}
}
export default BroadCast;
