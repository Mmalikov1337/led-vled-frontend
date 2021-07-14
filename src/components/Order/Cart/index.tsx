import React, { ChangeEvent } from "react";
import MaskedInput from "react-text-mask";
import { tempItems } from "@src/config";
import boxPNG from "./../../../../assets/images/box.png";
import LocalStorageHepler from "@src/helpers/localStorageHelper";
import Router from "next/router";
import OrderDataDTO from "@src/types/OrderDataDTO";
import CartItem from "./CartItem";

const getSum = (tempItems, products) => {
	let sum = 0;
	tempItems.forEach((i, index) => (sum += ~~i.price * products[index]));
	return sum;
};

export default function Cart() {
	// const ChangeQuantity = () => {}

	const [isLoaded, setIsLoaded] = React.useState(false);

	const [selectedQuantity, setSelectedQuantity] = React.useState([...Array(5)].fill(0));

	let ls: LocalStorageHepler = isLoaded ? new LocalStorageHepler(setSelectedQuantity) : null;

	const maxIndex = tempItems.length - 3;

	const [name, setName] = React.useState<string>("");
	const [mail, setMail] = React.useState<string>("");
	const [phone, setPhone] = React.useState<string>("");
	const [city, setCity] = React.useState<string>("");
	const [homeAdress, setHomeAdress] = React.useState<string>("");
	const [isHouse, setIsHouse] = React.useState<boolean>(false);
	// const [isFlat2, setIsFlat2] = React.useState<any>(false);
	const [postIndex, setPostIndex] = React.useState<string>("");
	const [promocode, setPromocode] = React.useState<string>("");
	const [instagram, setInstagram] = React.useState<string>("");
	const [comment, setComment] = React.useState<string>("");

	const nameInput = React.useRef<HTMLInputElement | null>(null);
	const mailInput = React.useRef<HTMLInputElement | null>(null);
	const phoneDiv = React.useRef<HTMLDivElement | null>(null);
	const cityInput = React.useRef<HTMLInputElement | null>(null);
	const homeAdressInput = React.useRef<HTMLInputElement | null>(null);
	// const isHouseInput = React.useRef<HTMLInputElement | null>(null)
	const postIndexInput = React.useRef<HTMLInputElement | null>(null);
	const promocodeInput = React.useRef<HTMLInputElement | null>(null);
	const instagramInput = React.useRef<HTMLInputElement | null>(null);
	const commentInput = React.useRef<HTMLInputElement | null>(null);

	const onChangeHandler = (cb: (string: string) => void) => (e: ChangeEvent<HTMLInputElement>) =>
		cb((e.target as HTMLInputElement).value);

	const submit = () => {
		if (!isLoaded) return;
		
		const mailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		const nameIsValid = name.length >= 2;
		const mailIsValid = mailReg.test(mail);
		const phoneIsValid = phone && phone[phone.length - 1] !== "_";
		const cityIsValid = !!city;
		const homeAdressIsValid = !!homeAdress;
		const postIndexIsValid = postIndex.length === 6;
		const promocodeIsValid = !!promocode;
		const instagramIsValid = !!instagram;
		const commentIsValid = !!comment;

		let isAllCorrect = true;

		if (!nameIsValid) {
			isAllCorrect = false;
			nameInput.current.classList.add("wrong-input");
		} else {
			nameInput.current.classList.remove("wrong-input");
		}
		if (!mailIsValid) {
			isAllCorrect = false;
			mailInput.current.classList.add("wrong-input");
		} else {
			mailInput.current.classList.remove("wrong-input");
		}
		if (!phoneIsValid) {
			isAllCorrect = false;
			phoneDiv.current.querySelector("input").classList.add("wrong-input");
		} else {
			phoneDiv.current.querySelector("input").classList.remove("wrong-input");
		}
		if (!cityIsValid) {
			isAllCorrect = false;
			cityInput.current.classList.add("wrong-input");
		} else {
			cityInput.current.classList.remove("wrong-input");
		}
		if (!homeAdressIsValid) {
			isAllCorrect = false;
			homeAdressInput.current.classList.add("wrong-input");
		} else {
			homeAdressInput.current.classList.remove("wrong-input");
		}
		if (!postIndexIsValid) {
			isAllCorrect = false;
			postIndexInput.current.classList.add("wrong-input");
		} else {
			postIndexInput.current.classList.remove("wrong-input");
		}
		// if (!promocodeIsValid) {
		// 	promocodeInput.current.classList.add("wrong-input");
		// } else {
		// 	promocodeInput.current.classList.remove("wrong-input");
		// }
		// if (!instagramIsValid) {
		// 	instagramInput.current.classList.add("wrong-input");
		// } else {
		// 	instagramInput.current.classList.remove("wrong-input");
		// }
		// if (!commentIsValid) {
		// 	commentInput.current.classList.add("wrong-input");
		// 	// return;
		// } else {
		// 	commentInput.current.classList.remove("wrong-input");
		// }

		if (!isAllCorrect) return;

		ls.setOrderData(
			new OrderDataDTO(
				name,
				mail,
				phone,
				city,
				homeAdress,
				isHouse,
				postIndex,
				promocode ?? null,
				instagram ?? null,
				comment ?? null
			)
		);

		console.log("orderData: ", ls.getOrderData());

		Router.push("/order/delivery");
	};

	React.useEffect(() => {
		setIsLoaded(true);
		document.body.style.overflow = "scroll";
	}, []);

	React.useEffect(() => {
		console.log(phone);
	}, [phone]);

	React.useEffect(() => {
		if (isLoaded) {
			ls.setSelectedProducts();
		}
	}, [isLoaded]);

	if (!isLoaded) {
		return <h1>LOADING</h1>;
	}

	return (
		<div className="cart">
			<div className="cart__container">
				<div className="cart__title">
					<h3>Оформление заказа</h3>
				</div>
				<div className="cart__orders">
					{tempItems.map((i, index) => (
						<React.Fragment key={index}>
							{ls.getSelectedProducts()[index] > 0 &&
								CartItem(
									tempItems,
									ls,
									false,
									i.title,
									i.price,
									i.pic,
									i.mainColor,
									i.sideColor,
									index,
									{ width: "45px", height: "195px" }
								)}
						</React.Fragment>
					))}
				</div>
				<div className="cart__info">
					<span className="cart__info__min">
						Минимальный заказ
						<span>от 30 шт</span>
					</span>

					<span className="cart__info__sum">
						Сумма заказа:
						<span>{getSum(tempItems, ls.getSelectedProducts())}₽</span>
					</span>
				</div>
				<div className="cart__make_order">
					<div className="cart__make_order__table">
						<div className="cart__make_order__table__input">
							<div className="cart__make_order__table__input__name inp-block">
								<div className="cart__make_order__table__input__name__svg-holder svgHolder">
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path
												d="M6.99984 7.41351C8.73337 7.41351 10.1388 5.76857 10.1388 3.73945C10.1388 0.925623 8.73344 0.0654297 6.99984 0.0654297C5.26617 0.0654297 3.86084 0.925623 3.86084 3.73945C3.86087 5.76857 5.2662 7.41351 6.99984 7.41351Z"
												fill="white"
											/>
											<path
												d="M13.9316 12.821L12.3479 9.25355C12.2755 9.0903 12.1482 8.95491 11.9899 8.87245L9.53211 7.59304C9.47791 7.56488 9.41229 7.57036 9.36357 7.60724C8.66843 8.13301 7.85111 8.41091 7.00005 8.41091C6.14886 8.41091 5.33161 8.13301 4.63647 7.60724C4.58761 7.57036 4.52199 7.56488 4.46779 7.59304L2.01022 8.87245C1.85176 8.95491 1.72465 9.09024 1.65214 9.25355L0.0684867 12.821C-0.0406969 13.067 -0.0183195 13.3484 0.128365 13.5739C0.274981 13.7995 0.523116 13.9341 0.792157 13.9341H13.2078C13.4769 13.9341 13.7251 13.7994 13.8717 13.5739C14.0183 13.3484 14.0408 13.0669 13.9316 12.821Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="14" height="14" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__name__text textInput"
									placeholder="Ваше имя"
									value={name}
									onChange={onChangeHandler(setName)}
									ref={nameInput}
								/>
							</div>
							<div className="cart__make_order__table__input__mail inp-block">
								<div className="cart__make_order__table__input__mail__svg-holder svgHolder">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M14.8678 2.98047L10.3186 7.50036L14.8678 12.0203C14.95 11.8484 14.9999 11.6583 14.9999 11.4554V3.54528C14.9999 3.34234 14.95 3.15235 14.8678 2.98047Z"
											fill="white"
										/>
										<path
											d="M13.6815 2.22656H1.31823C1.11529 2.22656 0.925303 2.27646 0.753418 2.35869L6.56776 8.14375C7.08187 8.65786 7.91788 8.65786 8.43198 8.14375L14.2463 2.35869C14.0744 2.27646 13.8845 2.22656 13.6815 2.22656Z"
											fill="white"
										/>
										<path
											d="M0.132129 2.98047C0.0498926 3.15235 0 3.34234 0 3.54528V11.4554C0 11.6584 0.0498926 11.8484 0.132129 12.0203L4.68132 7.50036L0.132129 2.98047Z"
											fill="white"
										/>
										<path
											d="M9.69714 8.12158L9.0534 8.76532C8.19679 9.62193 6.80293 9.62193 5.94632 8.76532L5.30261 8.12158L0.753418 12.6415C0.925303 12.7237 1.11529 12.7736 1.31823 12.7736H13.6815C13.8845 12.7736 14.0744 12.7237 14.2463 12.6415L9.69714 8.12158Z"
											fill="white"
										/>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__mail__text textInput"
									placeholder="Ваша почта"
									value={mail}
									onChange={onChangeHandler(setMail)}
									ref={mailInput}
								/>
							</div>
							<div className="cart__make_order__table__input__phone inp-block" ref={phoneDiv}>
								<div className="cart__make_order__table__input__phone__svg-holder svgHolder">
									<svg
										width="12"
										height="12"
										viewBox="0 0 12 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.0526 7.90106C10.3124 7.90106 9.58738 7.78548 8.90021 7.55873C8.56484 7.44315 8.184 7.53221 7.96359 7.75706L6.60127 8.7859C5.03811 7.9516 4.03769 6.95179 3.21475 5.4L4.21579 4.0699C4.46779 3.8179 4.55812 3.44905 4.45012 3.10358C4.22148 2.412 4.10528 1.68632 4.10528 0.947369C4.10528 0.425043 3.68023 0 3.15791 0H0.947369C0.425043 0 0 0.425043 0 0.947369C0 7.04147 4.95853 12 11.0526 12C11.575 12 12 11.575 12 11.0526V8.84843C12 8.3261 11.575 7.90106 11.0526 7.90106Z"
											fill="white"
										/>
									</svg>
								</div>
								<MaskedInput
									mask={[
										"+",
										"7",
										" ",
										"(",
										/[1-9]/,
										/\d/,
										/\d/,
										")",
										" ",
										/\d/,
										/\d/,
										/\d/,
										" ",
										"-",
										" ",
										/\d/,
										/\d/,
										" ",
										"-",
										" ",
										/\d/,
										/\d/,
									]}
									// className="form-control"
									placeholder="+7 (___) ___ - __ - __"
									guide={true}
									className="cart__make_order__table__input__phone__text textInput"
									value={phone}
									onChange={onChangeHandler(setPhone)}
								/>
							</div>
							<div className="cart__make_order__table__input__city inp-block">
								<div className="cart__make_order__table__input__city__svg-holder svgHolder">
									<svg
										width="12"
										height="14"
										viewBox="0 0 12 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 0C3.06 0 0.667969 2.39203 0.667969 5.33203C0.667969 6.49551 1.03547 7.60102 1.73164 8.52852L5.67133 13.8346C5.68117 13.8474 5.69621 13.8524 5.70715 13.8639C5.90402 14.0747 6.18813 14.0216 6.3284 13.8346C7.46289 12.3208 9.54238 9.49375 10.3419 8.42734C10.3419 8.42734 10.3422 8.42652 10.3425 8.42598L10.3474 8.41941C10.9916 7.51434 11.332 6.44684 11.332 5.33203C11.332 2.39203 8.94 0 6 0ZM6 8.20859C4.41707 8.20859 3.12344 6.91496 3.12344 5.33203C3.12344 3.7491 4.41707 2.45547 6 2.45547C7.58293 2.45547 8.87656 3.7491 8.87656 5.33203C8.87656 6.91496 7.58293 8.20859 6 8.20859Z"
											fill="white"
										/>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__city__text textInput"
									placeholder="Город, улица"
									value={city}
									onChange={onChangeHandler(setCity)}
									ref={cityInput}
								/>
							</div>
							<div className="cart__make_order__table__input__home inp-block">
								<input
									type="text"
									className="cart__make_order__table__input__home__text textInput"
									placeholder="Дом, квартира"
									value={homeAdress}
									onChange={onChangeHandler(setHomeAdress)}
									ref={homeAdressInput}
								/>
							</div>
							<div className="cart__make_order__table__input__homeType inp-block">
								<label className="cart__make_order__table__input__homeType__label">
									<input
										type="radio"
										name="homeTypeRadio"
										id=""
										onChange={() => setIsHouse(false)}
										checked={!isHouse}
									/>
									<span>Квартира</span>
								</label>
								<label className="cart__make_order__table__input__homeType__label">
									<input
										type="radio"
										name="homeTypeRadio"
										id=""
										onChange={() => setIsHouse(true)}
										checked={isHouse}
									/>
									<span>Частный дом</span>
								</label>
							</div>
							<div className="cart__make_order__table__input__index inp-block">
								<div className="cart__make_order__table__input__index__svg-holder svgHolder">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path
												d="M10.075 1.20531L3.26813 4.69031L0.5625 3.35906L7.24938 0.0571875C7.39938 -0.0190625 7.57938 -0.0190625 7.73688 0.0571875L10.075 1.20531Z"
												fill="white"
											/>
											<path
												d="M14.4299 3.35928L7.50366 6.79053L4.90991 5.5124L4.53491 5.32178L11.3493 1.8374L11.7243 2.0274L14.4299 3.35928Z"
												fill="white"
											/>
											<path
												d="M6.94875 7.77939L6.94125 15L0.3075 11.5381C0.12 11.4394 0 11.2413 0 11.0281V4.34814L2.81125 5.73314V8.16814C2.81125 8.48002 3.06625 8.73877 3.37375 8.73877C3.68125 8.73877 3.93625 8.48002 3.93625 8.16814V6.29627L4.31125 6.47877L6.94875 7.77939Z"
												fill="white"
											/>
											<path
												d="M14.9924 4.35596L8.07366 7.77221L8.06616 14.9928L14.9999 11.3722L14.9924 4.35596Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="15" height="15" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__index__text textInput"
									placeholder="Индекс"
									value={postIndex}
									onChange={onChangeHandler(setPostIndex)}
									ref={postIndexInput}
								/>
							</div>
							<div className="cart__make_order__table__input__promocode inp-block">
								<div className="cart__make_order__table__input__promocode__svg-holder svgHolder">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M3.64436 6.5332C3.37014 6.5332 3.13867 6.83525 3.13867 7.19238C3.13867 7.5498 3.37012 7.85186 3.64436 7.85186C3.91858 7.85186 4.15031 7.5498 4.15031 7.19238C4.15031 6.83525 3.91858 6.5332 3.64436 6.5332Z"
											fill="white"
										/>
										<path
											d="M8.07869 10.019C7.80447 10.019 7.573 10.3211 7.573 10.6785C7.573 11.0356 7.80444 11.3377 8.07869 11.3377C8.35291 11.3377 8.58468 11.0356 8.58468 10.6785C8.58468 10.3211 8.35291 10.019 8.07869 10.019Z"
											fill="white"
										/>
										<path
											d="M10.9527 4.67865C6.49711 0.578904 6.72501 0.735496 6.37078 0.597888C5.86737 0.398201 5.26837 0.502615 4.85461 0.88324L0.729814 4.67865C0.266016 5.10521 0 5.71224 0 6.34447V13.0655C0 13.8574 0.641045 14.5019 1.42884 14.5019H10.2533C11.0411 14.5019 11.6822 13.8574 11.6822 13.0655V6.34447C11.6822 5.71224 11.4161 5.10521 10.9527 4.67865ZM5.41597 3.23783C5.4426 2.98242 5.67686 2.80104 5.93895 2.85023C6.18961 2.9025 6.33079 3.14303 6.28406 3.36703C6.2344 3.60568 6.0099 3.7577 5.76727 3.71215C5.53553 3.66381 5.39408 3.45328 5.41597 3.23783ZM2.25973 7.19232C2.25973 6.34418 2.88085 5.65424 3.64436 5.65424C4.40815 5.65424 5.02925 6.34418 5.02925 7.19232C5.02925 8.04047 4.40812 8.7307 3.64436 8.7307C2.88085 8.7307 2.25973 8.04047 2.25973 7.19232ZM4.77905 11.8699C4.46851 11.8699 4.25177 11.5515 4.37417 11.2602L6.51349 6.16137C6.60753 5.93754 6.86505 5.83207 7.08888 5.92611C7.31271 6.01986 7.41788 6.27767 7.32413 6.5015L5.18452 11.6003C5.11392 11.7685 4.95103 11.8699 4.77905 11.8699ZM8.07885 12.2167C7.31534 12.2167 6.69425 11.5268 6.69425 10.6786C6.69425 9.83051 7.31537 9.14027 8.07885 9.14027C8.84235 9.14027 9.46374 9.83051 9.46374 10.6786C9.46374 11.5268 8.84235 12.2167 8.07885 12.2167Z"
											fill="white"
										/>
										<path
											d="M14.8895 9.50488C13.4587 5.33963 12.6639 3.02377 12.6526 2.99746C12.4039 2.42148 11.9205 1.97354 11.3269 1.76875C11.2929 1.75718 11.4938 1.80599 8.30664 1.0498L11.5472 4.03164C12.1915 4.62402 12.5609 5.46689 12.5609 6.34434V12.0396L14.1419 11.3629C14.857 11.0535 15.1895 10.2229 14.8895 9.50488Z"
											fill="white"
										/>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__promocode__text textInput"
									placeholder="Промокод"
									value={promocode}
									onChange={onChangeHandler(setPromocode)}
									ref={promocodeInput}
								/>
							</div>
							<div className="cart__make_order__table__input__instagram inp-block">
								<div className="cart__make_order__table__input__instagram__svg-holder svgHolder">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.81836 7.5C8.81836 8.22807 8.22807 8.81836 7.5 8.81836C6.77193 8.81836 6.18164 8.22807 6.18164 7.5C6.18164 6.77193 6.77193 6.18164 7.5 6.18164C8.22807 6.18164 8.81836 6.77193 8.81836 7.5Z"
											fill="white"
										/>
										<path
											d="M9.72656 3.51562H5.27344C4.30412 3.51562 3.51562 4.30412 3.51562 5.27344V9.72656C3.51562 10.6959 4.30412 11.4844 5.27344 11.4844H9.72656C10.6959 11.4844 11.4844 10.6959 11.4844 9.72656V5.27344C11.4844 4.30412 10.6959 3.51562 9.72656 3.51562ZM7.5 9.69727C6.28841 9.69727 5.30273 8.71159 5.30273 7.5C5.30273 6.28841 6.28841 5.30273 7.5 5.30273C8.71159 5.30273 9.69727 6.28841 9.69727 7.5C9.69727 8.71159 8.71159 9.69727 7.5 9.69727ZM10.0195 5.41992C9.7768 5.41992 9.58008 5.2232 9.58008 4.98047C9.58008 4.73774 9.7768 4.54102 10.0195 4.54102C10.2623 4.54102 10.459 4.73774 10.459 4.98047C10.459 5.2232 10.2623 5.41992 10.0195 5.41992Z"
											fill="white"
										/>
										<path
											d="M11.0449 0H3.95508C1.77429 0 0 1.77429 0 3.95508V11.0449C0 13.2257 1.77429 15 3.95508 15H11.0449C13.2257 15 15 13.2257 15 11.0449V3.95508C15 1.77429 13.2257 0 11.0449 0ZM12.3633 9.72656C12.3633 11.1804 11.1804 12.3633 9.72656 12.3633H5.27344C3.81958 12.3633 2.63672 11.1804 2.63672 9.72656V5.27344C2.63672 3.81958 3.81958 2.63672 5.27344 2.63672H9.72656C11.1804 2.63672 12.3633 3.81958 12.3633 5.27344V9.72656Z"
											fill="white"
										/>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__instagram__text textInput"
									placeholder="Instagram"
									value={instagram}
									onChange={onChangeHandler(setInstagram)}
									ref={instagramInput}
								/>
							</div>
							<div className="cart__make_order__table__input__comment inp-block">
								<div className="cart__make_order__table__input__comment__svg-holder svgHolder">
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.4 0.466797H12.6C13.3588 0.466797 14 1.108 14 1.8668V9.5668C14 10.3256 13.3588 10.9668 12.6 10.9668H5.93647L3.67267 13.4572C3.6274 13.5066 3.5644 13.5335 3.5 13.5335C3.47177 13.5335 3.4433 13.5283 3.41577 13.5178C3.32593 13.4831 3.26667 13.3965 3.26667 13.3001V10.9668H1.4C0.6412 10.9668 0 10.3256 0 9.5668V1.8668C0 1.108 0.6412 0.466797 1.4 0.466797Z"
											fill="white"
										/>
									</svg>
								</div>
								<input
									type="text"
									className="cart__make_order__table__input__comment__text textInput"
									placeholder="Комментарий к заказу"
									value={comment}
									onChange={onChangeHandler(setComment)}
									ref={commentInput}
								/>
							</div>
						</div>
						<div className="cart__make_order__table__buttons">
							<div className="cart__make_order__table__buttons__prew">
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
							</div>
							<button className="cart__make_order__table__buttons__next" onClick={submit}>
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
			</div>
		</div>
	);
}
// function CartItem(
// 	tempItems: {
// 		pic: any;
// 		mainColor: string;
// 		sideColor: string;
// 		rating: string;
// 		title: string;
// 		description: string;
// 		price: string;
// 		mesure: string;
// 		properties: string[];
// 		id: number;
// 	}[],
// 	ls: LocalStorageHepler,
// 	arg2: boolean,
// 	title: string,
// 	price: string,
// 	pic: any,
// 	mainColor: string,
// 	sideColor: string,
// 	index: number,
// 	arg9: { width: string; height: string }
// ): React.ReactNode {
// 	throw new Error("Function not implemented.");
// }
