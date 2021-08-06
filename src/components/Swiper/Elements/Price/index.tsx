import NextButton from '@src/components/Buttons/NextButton';
import { catalogURL } from '@src/config';
import toPage from '@src/helpers/toPage';
import React from 'react'
// import { NavLink } from 'react-router-dom'
import priceCirclePNG from './../../../../assets/images/price_circle.png';


export default function Price() {
	return (
		<div className='price' id="price">
			{/* <div className="price-container"> */}

			<div className="price__left">
				<div className="price__left__title">
					<h3>Цена</h3>
				</div>
				<div className="price__left__text">
					<p>Наше мороженое изготавливается в Германии,
					по немецким стандартам качества и с заботой о покупателях
					</p>
					<p>
						Доставляется во все продуктовые магазины России и СНГ
					</p>
					<p>
						<span>Лёд Влёд</span> является продуктом с самой приятной
						ценой на Российском рынке и при этом 100% <span>натуральным</span> продуктом!
					</p>
					<p>
						Такая низкая стоимость складывается из бюджетной упаковки и простого состава
					</p>
				</div>
				{/* <NavLink to="/catalog"> */}
					<NextButton
							classes={["btn", "b-yellow", "btn-sm", "price__left__button"]}
							onClick={() => {
								toPage(catalogURL);
							}}
							text="Каталог"
						/>
				{/* </NavLink> */}
			</div>
			<div className="price__right">
				<img src={priceCirclePNG} alt="priceCirclePNG" />
			</div>
		</div>
		// </div>
	)
}
