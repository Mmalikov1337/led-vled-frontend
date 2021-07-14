import React from 'react'
// import { NavLink } from 'react-router-dom'
import usagePNG from '../../../../assets/images/usage_pic.png';


export default function Usage() {
	return (
		<div className='usage' id='usage'>
			<div className="usage__wrapper">
				<div className="usage__wrapper__left">

					<div className="usage__wrapper__info">
					<div className="usage__wrapper__info__top">

						<div className="usage__wrapper__info__title">
							<h3>
								Просто заморозь
							</h3>
						</div>
						{/* <NavLink to="/catalog"> */}
							<div className="usage__wrapper__info__button">
								<div>
									<span>Каталог</span>
									<div>
										<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z" fill="white" />
										</svg>
									</div>
								</div>
							</div>

					</div>

						{/* </NavLink> */}
						<div className="usage__wrapper__info__button-big">
							<div>
								<span>Хочешь стать партнером? </span>
								<div>
									<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z" fill="white" />
									</svg>
								</div>
							</div>
						</div>

					</div>
					<div className="usage__wrapper__center">

						<div className="usage__wrapper__center__text">
							<p>Наше мороженое не требует специального хранения и имеет срок годности 1.5 года</p>
							<p>Для того, чтобы мороженое было готово к использованию, его достаточно заморозить</p>
							<p>Лёд Влёд имеет продуманный дизайн и удобную в использовании упаковку</p>
						</div>

					</div>
				</div>
				
				<div className="usage__wrapper__right">
					<img src={usagePNG} alt="usagePNG" />
				</div>
			</div>

		</div>
	)
}
