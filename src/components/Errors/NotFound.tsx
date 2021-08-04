import React from "react";

import Router from "next/router";
import logo_whiteSVG from "@images/logo_white.svg";
import icecreamPNG from "@images/icecream.png";

function Footer() {
	return (
		<div className="blue_page__footer">
			<div className="blue_page__footer__wrapper">
				<div className="blue_page__footer__wrapper__logo">
					<img src={logo_whiteSVG} alt="logo_whiteSVG" />
				</div>
				<Feedback />
			</div>
		</div>
	);
}
const Feedback = () => {
	return (
		<div className="blue_page__footer__wrapper__feedback">
			<React.Fragment>
				<div className="blue_page__footer__wrapper__feedback__phone">
					<span>8 800 800 - 80 - 80</span>
				</div>
				<div className="blue_page__footer__wrapper__feedback__mail">
					<span>info@ledvled.ru</span>
				</div>
				<div className="blue_page__footer__wrapper__feedback__adress">
					<span>ООО «Глобал» г. Россия, Омск, ул. Звездова 129</span>
				</div>
			</React.Fragment>
		</div>
	);
};
export default function NotFound() {
	return (
		<div className="blue_page">
			<div className="blue_page__navbar">
				<div className="blue_page__navbar__catalog">
					<svg
						width="30"
						height="16"
						viewBox="0 0 30 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="30" height="2" rx="1" fill="white" />
						<rect y="7" width="30" height="2" rx="1" fill="white" />
						<rect y="14" width="30" height="2" rx="1" fill="white" />
					</svg>
					Каталог
				</div>
			</div>
			<div className="main-block" id="main-block">
				<div className="blue_page__sidebar">
					<div className="sidebar-container">
						<div className="blue_page__sidebar__hash">
							<p>
								<span>#</span>лёдвлёд
							</p>
						</div>
					</div>
				</div>
				<div className="blue_page__main">
					<div className="blue_page__error_block">
						<div className="blue_page__error_pic">
							<div className="blue_page__error_pic__num">4</div>
							<img className="blue_page__error_pic__pic" src={icecreamPNG}/>
							<div className="blue_page__error_pic__num">4</div>
						</div>
						<div className="blue_page__error_text">
							Извините, страница отсутствует или находится в разработке
						</div>

						<button className="cart__make_order__table__buttons__next blue_page__error_button" onClick={() => Router.push("/")}>
								<div>
									<span>На главную</span>
									<div>
										<svg
											width="9"
											height="15"
											viewBox="0 0 9 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z"
												fill="white"
											/>
										</svg>
									</div>
								</div>
							</button>
					</div>
				</div>
				<div className="blue_page__logo">
					<p className="elements__background-holder__logo">
						Сделано в <span>REJI</span>
					</p>
				</div>
			</div>
			<Footer />
		</div>
	);
}
