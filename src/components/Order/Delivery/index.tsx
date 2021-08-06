import NextButton from "@src/components/Buttons/NextButton";
import PrewButton from "@src/components/Buttons/PrewButton";
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
			console.log("wrong method");
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
					<PrewButton
						classes={["btn", "b-white-sh", "btn-sm", "delivery__buttons__prew"]}
						onClick={() => {}}
						text="Назад"
					/>
					<NextButton classes={["btn", "b-yellow", "btn-sm","delivery__buttons__next"]} onClick={submit} text="Далее" />
				</div>
			</div>
		</div>
	);
}
