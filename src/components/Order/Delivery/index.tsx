import LocalStorageHepler from "@src/helpers/localStorageHelper";
import DeliveryDataDTO from "@src/types/DeliveryDataDTO";
import Router from "next/router";
import React from "react";

export default function Delivery() {
	const [deliveryMethod, setDeliveryMethod] = React.useState<number | null>(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	let ls: LocalStorageHepler = isLoaded ? new LocalStorageHepler(null) : null;

	const methodsRef = React.useRef(null);
	const submit = () => {
		const selectedMethod = methodsRef.current.querySelector(`input[type='radio']:checked`);
		if (!selectedMethod || !selectedMethod.dataset.method) {
			console.log("no method");
			return;
		}
		ls.setDeliveryData(new DeliveryDataDTO(selectedMethod.dataset.method));
		Router.push("/order/payment");
	};

	React.useEffect(() => {
		setIsLoaded(true);
		document.body.style.overflow = "scroll";
	}, []);

	return (
		<div className="delivery">
			<div className="delivery__container">
				<div className="delivery__title">
					<h3>Способ доставки</h3>
				</div>

				<div className="delivery__table" ref={methodsRef}>
					<label>
						<input type="radio" name="delivery" data-method="SDEK_point" />
						<span className="rad_button"></span>
						<div className="delivery__table__wrapper">
							<p className="delivery__table__top">
								<span className="delivery__table__top__left">Пункт выдачи «СДЭК»</span>
								<span className="delivery__table__top__right">320 ₽</span>
							</p>
							<p className="delivery__table__bottom">
								<span className="delivery__table__bottom__left">10 - 12 дней</span>
								<span className="delivery__table__bottom__right">Отправка с Пнд - Пт</span>
							</p>
						</div>
					</label>
					<label>
						<input type="radio" name="delivery" data-method="SDEK_door" />
						<span className="rad_button">
							<span className="rad_button__second"></span>
						</span>
						<div className="delivery__table__wrapper">
							<p className="delivery__table__top">
								<span className="delivery__table__top__left">Курьер «СДЭК» доставка до двери</span>
								<span className="delivery__table__top__right">440 ₽</span>
							</p>
							<p className="delivery__table__bottom">
								<span className="delivery__table__bottom__left">10 - 12 дней</span>
								<span className="delivery__table__bottom__right">Отправка с Пнд - Пт</span>
							</p>
						</div>
					</label>
					<label>
						<input type="radio" name="delivery" data-method="DPD_door" />
						<span className="rad_button"></span>
						<div className="delivery__table__wrapper">
							<p className="delivery__table__top">
								<span className="delivery__table__top__left">DPD - Доставка до двери</span>
								<span className="delivery__table__top__right">320 ₽</span>
							</p>
							<p className="delivery__table__bottom">
								<span className="delivery__table__bottom__left">10 дней (DPD OPTIMUM)</span>
								<span className="delivery__table__bottom__right">Отправка заказов с Пнд - Пт</span>
							</p>
						</div>
					</label>
					<label>
						<input type="radio" name="delivery" data-method="DPD_point" />
						<span className="rad_button"></span>
						<div className="delivery__table__wrapper">
							<p className="delivery__table__top">
								<span className="delivery__table__top__left">DPD - Доставка до пункта выдачи</span>
								<span className="delivery__table__top__right">235 ₽</span>
							</p>
							<p className="delivery__table__bottom">
								<span className="delivery__table__bottom__left">10 дней (OPTIMUM)</span>
								<span className="delivery__table__bottom__right">Отправка заказов с Пнд - Пт</span>
							</p>
						</div>
					</label>
					<label>
						<input type="radio" name="delivery" data-method="courier_omsk" />
						<span className="rad_button"></span>
						<div className="delivery__table__wrapper">
							<p className="delivery__table__top">
								<span className="delivery__table__top__left">Курьерская доставка по Омску</span>
								<span className="delivery__table__top__right">300 ₽</span>
							</p>
							<p className="delivery__table__bottom">
								<span className="delivery__table__bottom__left">от 2 до 3 дней</span>
								<span className="delivery__table__bottom__right">Отправка заказов с Пнд - Пт</span>
							</p>
						</div>
					</label>
					<label>
						<input type="radio" name="delivery" data-method="russian_post" />
						<span className="rad_button"></span>
						<div className="delivery__table__wrapper">
							<p className="delivery__table__top">
								<span className="delivery__table__top__left">Посылка Почта России</span>
								<span className="delivery__table__top__right">544 ₽</span>
							</p>
							<p className="delivery__table__bottom">
								<span className="delivery__table__bottom__left">от 7 до 9 раб. дней</span>
								<span className="delivery__table__bottom__right">Отправка заказов с Пнд - Пт</span>
							</p>
						</div>
					</label>
				</div>

				<div className="delivery__select">
					<div className="delivery__select__text">
						<p className="delivery__select__text__title">Выбрать адрес пункта выдачи</p>
						<p className="delivery__select__text__description">
							Курьерская доставка заказов с ПН - ПТ с 10:00 - 18:00 Получение заказа в пункте выдачи
							осуществляется в часы работы соответствующего пункта
						</p>
					</div>
					<div className="delivery__select__button_holder">
						<div className="delivery__select__button_holder__button">
							<span>Выбрать</span>
							<div>
								<svg
									width="13"
									height="15"
									viewBox="0 0 13 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6.5 0C3.35 0 0.787109 2.56289 0.787109 5.71289C0.787109 6.95947 1.18086 8.14394 1.92676 9.1377L6.14785 14.8228C6.1584 14.8366 6.17451 14.8418 6.18623 14.8541C6.39717 15.08 6.70156 15.0232 6.85186 14.8228C8.06738 13.2009 10.2954 10.1719 11.1521 9.0293C11.1521 9.0293 11.1523 9.02842 11.1526 9.02783L11.1579 9.0208C11.8481 8.05107 12.2129 6.90732 12.2129 5.71289C12.2129 2.56289 9.65 0 6.5 0ZM6.5 8.79492C4.804 8.79492 3.41797 7.40889 3.41797 5.71289C3.41797 4.01689 4.804 2.63086 6.5 2.63086C8.196 2.63086 9.58203 4.01689 9.58203 5.71289C9.58203 7.40889 8.196 8.79492 6.5 8.79492Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<div className="delivery__buttons">
					<button className="delivery__buttons__prew">
						<div>
							<span>Назад</span>
							<div>
								<svg
									width="9"
									height="15"
									viewBox="0 0 9 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0.333149 8.0853L7.00834 14.7604C7.16273 14.9149 7.36882 15 7.58858 15C7.80833 15 8.01443 14.9149 8.16882 14.7604L8.6604 14.2689C8.98027 13.9487 8.98027 13.4282 8.6604 13.1084L3.05508 7.50311L8.66662 1.89157C8.82101 1.73706 8.90625 1.53108 8.90625 1.31145C8.90625 1.09158 8.82101 0.885602 8.66662 0.730968L8.17504 0.239632C8.02053 0.0851201 7.81455 -9.54393e-08 7.5948 -1.14651e-07C7.37504 -1.33862e-07 7.16895 0.08512 7.01456 0.239631L0.333149 6.9208C0.178394 7.0758 0.093395 7.28274 0.0938832 7.50274C0.0933949 7.72359 0.178394 7.93042 0.333149 8.0853Z"
										fill="#008CE6"
									/>
								</svg>
							</div>
						</div>
					</button>
					<button className="delivery__buttons__next" onClick={submit}>
						<div>
							<span>Далее</span>
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
		</div>
	);
}
