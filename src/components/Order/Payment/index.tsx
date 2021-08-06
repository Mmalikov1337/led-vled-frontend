import LocalStorageHepler from "@src/helpers/localStorageHelper";
import PaymentDataDTO from "@src/types/PaymentDataDTO";
import Router from "next/router";
import React from "react";
// import PaymentPageSdk from "@raiffeisen-ecom/payment-sdk";
import logoSVG from "@images/logo.svg";
import handPNG from "@images/hand.png";
import PopupLayout from "@layouts/popupLayout";
import { serverURL } from "@src/config";
import NextButton from "@src/components/Buttons/NextButton";
import PrewButton from "@src/components/Buttons/PrewButton";
// const payment = new PaymentPageSdk('000001780049001-80049001', {
//     url: 'https://test.ecom.raiffeisen.ru/pay/'
// });

// payment.openPopup({
//     amount: 10.00,
//     comment: 'Благотворительное пожертвование',
//     locale: 'ru',
// });
export default function Payment() {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [isCompleted, setIsCompleted] = React.useState(false);
	let ls: LocalStorageHepler = isLoaded ? new LocalStorageHepler(null) : null;

	const methodsRef = React.useRef(null);

	const submit = async () => {
		const selectedPayment = methodsRef.current.querySelector(`input[type='radio']:checked`);

		if (!selectedPayment || !selectedPayment.dataset.payment) {
			return;
		}
		const paymentData = new PaymentDataDTO(selectedPayment.dataset.payment);
		ls.setPaymentData(paymentData);

		/*DEV */
		Router.push(`/order/payment/${paymentData.method}`);
		return;
		/*DEV */

		const payload = {
			basket: ls.getSelectedProducts().map((it, index) => {
				return { id: index + 1, quantity: it };
			}),
			orderData: ls.getOrderData(),
			deliveryData: ls.getDeliveryData(),
			paymentData: ls.getPaymentData(),
		};

		const response = await fetch(`${serverURL}/api/orders`, {
			method: "POST",
			headers: {
				"content-type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(payload),
		});

		if (!response.ok) return;
		if (paymentData.method === "on_receiving") {
			setIsCompleted(true);
			return;
		}
		Router.push(`/order/payment/${paymentData.method}`);
	};

	React.useEffect(() => {
		setIsLoaded(true);
		document.body.style.overflow = "scroll";

		// on_receiving
		// yandex
		// sber
	}, []);

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
			<div className="payment">
				<div className="payment__container">
					<div className="payment__title">
						<h3>Способ оплаты</h3>
					</div>

					<div className="payment__list" ref={methodsRef}>
						<label>
							<input type="radio" name="delivery" data-payment="on_receiving" />
							<span className="rad_button"></span>
							<div className="payment__list__wrapper">
								<p className="payment__list__top">
									<span className="dpayment__list__top__left">Оплата при получении</span>
								</p>
							</div>
						</label>
						<label>
							<input type="radio" name="delivery" data-payment="raif" />
							<span className="rad_button"></span>
							<div className="payment__list__wrapper">
								<p className="payment__list__top">
									<span className="dpayment__list__top__left">Райф касса</span>
								</p>
								<p className="payment__list__bottom">
									<span className="payment__list__bottom__left">
										Сбербанк, оплата картой без комиссии, Яндекс деньги, Киви кошелек
									</span>
								</p>
							</div>
						</label>
						<label>
							<input type="radio" name="delivery" data-payment="sber" />
							<span className="rad_button"></span>
							<div className="payment__list__wrapper">
								<p className="payment__list__top">
									<span className="dpayment__list__top__left">Оплата через сервис Сбербанка</span>
								</p>
								<p className="payment__list__bottom">
									<span className="payment__list__bottom__left">
										Возможна оплата картой любого банка
									</span>
								</p>
							</div>
						</label>
					</div>
					<div className="payment__buttons">
						<PrewButton
							classes={["btn", "b-white-sh", "btn-sm", "payment__buttons__prew"]}
							onClick={() => {}}
							text="Назад"
						/>
						<NextButton
							classes={["btn", "b-yellow", "btn-sm", "payment__buttons__next"]}
							onClick={submit}
							text="Далее"
						/>
					</div>
				</div>
			</div>
		</>
	);
}
