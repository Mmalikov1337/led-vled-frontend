import LocalStorageHepler from "@src/helpers/localStorageHelper";
import DeliveryDataDTO from "@src/types/DeliveryDataDTO";
import PaymentDataDTO from "@src/types/PaymentDataDTO";
import Router from "next/router";
import React from "react";
// import PaymentPageSdk from "@raiffeisen-ecom/payment-sdk";
import logoSVG from "@images/logo.svg";
import handPNG from "@images/hand.png";
import PopupLayout from "@layouts/popupLayout";
import { serverURL } from "@src/config";
import Link from "next/link";

export default function Raif() {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [isCompleted, setIsCompleted] = React.useState(false);
	const [isApproved, setApproved] = React.useState(false);
	const [total, setTotal] = React.useState(0);
	let ls: LocalStorageHepler = isLoaded ? new LocalStorageHepler(setTotal) : null;

	const methodsRef = React.useRef(null);

	const submit = async () => {
		if (isApproved) setIsCompleted(true);
		else if (isLoaded)
			alert("Для продолжения согласитесь с политикой конфиденциальности и возврата");
	};

	React.useEffect(() => {
		setIsLoaded(true);
		document.body.style.overflow = "scroll";
	}, []);
	React.useEffect(() => {
		if (isLoaded) ls.countTotalPrice();
	}, [isLoaded]);

	return (
		<>
			{isCompleted && (
				<PopupLayout>
					<h2 className="title">Заказ успешно оформлен</h2>
					<p className="description">Скоро мы с вами свяжемся</p>
					<button className="button" onClick={() => Router.push("/order/cart")}>
						<div>
							<span>Продолжить</span>
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
					<img src={handPNG} alt="hand" className="pic" />
				</PopupLayout>
			)}
			<div className="payment raif">
				<div className="payment__container raif__container">
					<div className="payment__title">
						<h3>Услугу предоставляет сервис онлайн - платежей Raif Pay</h3>
					</div>
					<p className="payment__sumtext raif__sumtext">
						Сумма к оплате по счету:<span> {total}₽</span>
					</p>
					<div className="raif__input_wrapper">
						<button className="raif__button btn b-red btn-md" onClick={submit}>
							<div>
								<span>Оплатить</span>
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
						<label className="raif__label">
							<input
								type="checkbox"
								id="agree"
								checked={isApproved}
								onChange={() => setApproved(!isApproved)}
							/>
							<span className="rad_button"></span>
							Согласие с{" "}
							<Link href="/privacy-policy">
								<a>политикой конфиденциальности</a>
							</Link>{" "}
							и{" "}
							<Link href="/refund-policy">
								<a>возврата</a>
							</Link>{" "}
							при оплате картой
						</label>
					</div>

					<p className="raif__text">Вы будете перенаправлены на страницу оплаты</p>
					<p className="raif__text-gray">
						<span>Обратите внимание:</span> чтобы отказаться от покупки, напишите нам на почту{" "}
						<a href="mailto:info@ledvled.ru" className="link">
							info@ledvled.ru
						</a>{" "}
						или позвоните по телефона горячей линии{" "}
						<span className="link">8 800 854 - 12 - 34</span>
					</p>
				</div>
			</div>
		</>
	);
}
