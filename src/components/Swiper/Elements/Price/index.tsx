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
					<div className="price__left__button">
						<div>
							<span>Каталог</span>
							<div>
								<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z" fill="white" />
								</svg>
							</div>
						</div>
					</div>
				{/* </NavLink> */}
			</div>
			<div className="price__right">
				<img src={priceCirclePNG} alt="priceCirclePNG" />
			</div>
		</div>
		// </div>
	)
}
