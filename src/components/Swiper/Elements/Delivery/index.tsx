import NextButton from '@src/components/Buttons/NextButton';
import { cartURL, catalogURL } from '@src/config';
import toPage from '@src/helpers/toPage';
import React from 'react'
// import { NavLink } from 'react-router-dom'
import deliveryCirclePNG from './../../../../assets/images/delivery_circle.png';


export default function Delivery() {
	return (
		<div className='delivery-swiper' id="delivery">
			<div className="delivery-swiper__wrapper">

				<div className="delivery-swiper__left">
					<div className="delivery-swiper__left__title">
						<h3>Доставка</h3>
					</div>
					<div className="delivery-swiper__left__text">
						<p>Мы доставляем наше мороженое в любой
						уголок Российской Федерации и стран СНГ
					</p>
						<p>
							Для <span>розничного</span>  покупателя срок доставки
						в среднем <span>5 дней</span>
						</p>
						<p>
							Для <span>оптового</span> покупателя срок доставки в среднем <span>14 дней</span>
						</p>
					</div>
					{/* <NavLink to="/catalog"> */}
					
						<NextButton
							classes={["btn", "b-yellow", "btn-sm", "delivery-swiper__left__button"]}
							onClick={() => {
								toPage(cartURL);
							}}
							text="Каталог"
						/>
					{/* </NavLink> */}
				</div>
				<div className="delivery-swiper__right">
					<img src={deliveryCirclePNG} alt="deliveryCirclePNG" />
				</div>
			</div>

		</div>
	)
}
