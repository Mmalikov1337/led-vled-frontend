import React from "react";

import starSVG from "./../../../assets/images/star_full.svg";
import shadowPNG from "./../../../assets/images/shadow.png";
import logoSVG from "../../../assets/images/logo.svg";
import { tempItems } from "@src/config";
import LocalStorageHepler from "@src/helpers/localStorageHelper";

const Circle = ({ color, width, height }) => {
	return (
		<svg width={width} height={height} viewBox="0 0 582 582" xmlns="http://www.w3.org/2000/svg">
			<title>Layer 1</title>
			<circle id="svg_1" fill={color} cx="291" cy="291" r="291" viewBox="0 0 582 582" />
			<g id="svg_19">
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M241.815 61.409L291.527 147.581L341.324 61.3303C389.157 71.721 432.551 96.7749 465.466 133.004L415.669 219.255L515.182 219.237C530.139 265.865 530.123 316.017 515.135 362.654L415.606 362.682L465.356 448.872C432.465 485.171 389.041 510.26 341.182 520.614L291.435 434.435L241.646 520.672C193.822 510.26 150.433 485.209 117.504 448.998L167.292 362.761L67.8154 362.785C52.839 316.162 52.8513 266.007 67.8508 219.372L167.351 219.352L117.629 133.154C150.52 96.8475 193.95 71.7573 241.815 61.409Z"
					fill="white"
					fillOpacity="0.3"
				/>
			</g>
		</svg>
	);
};

export default function ProductList({ id }) {
	const [isLoaded, setIsLoaded] = React.useState(false);

	const [selectedQuantity, setSelectedQuantity] = React.useState([...Array(5)].fill(0));

	let ls: LocalStorageHepler = isLoaded ? new LocalStorageHepler(setSelectedQuantity) : null;

	const maxIndex = tempItems.length - 3;

	React.useEffect(() => {
		setIsLoaded(true);
	}, []);

	React.useEffect(() => {
		if (isLoaded) {
			ls.setSelectedProducts();
		}
	}, [isLoaded]);

	if (!isLoaded) {
		return <h1>LOADING</h1>;
	}

	return (
		<div className="start_page_catalog" id={id}>
			<div className="start_page_catalog__side">
				<p className="start_page_catalog__side__logo">
					Сделано в <span>REJI</span>
				</p>
			</div>
			<div className="start_page_catalog__products">
				{tempItems.map((it, index) => (
					<div className="start_page_catalog__products__item" key={index} id={`slide_${index}`}>
						<div className="start_page_catalog__products__item__top">
							<div className="start_page_catalog__products__item__rating">
								{it.rating}
								<img src={starSVG} alt="starSVG" />
							</div>

							<div className="start_page_catalog__products__item__content">
								<Circle color={it.mainColor} width="147" height="147" />
								<img
									src={shadowPNG}
									alt="starSVG"
									className="start_page_catalog__products__item__content__product__shadow"
								/>
								<img
									src={it.pic}
									alt="prodPNG"
									className="start_page_catalog__products__item__content__product"
								/>
								{/* <div /> */}
							</div>
						</div>

						<div className="start_page_catalog__products__item__title">
							<h4>{it.title}</h4>
						</div>
						<div className="start_page_catalog__products__item__counter">
							<div className="start_page_catalog__products__item__counter__plate">
								<button
									className="start_page_catalog__products__item__counter__plate__button"
									onClick={() => {
										ls.decreaseProductsQuantity(index);
									}}
								>
									<svg
										width="8"
										height="4"
										viewBox="0 0 8 4"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5.952 0.952H2.28C1.488 0.952 0.912 1.528 0.912 2.296C0.912 3.064 1.488 3.664 2.28 3.664H5.952C6.744 3.664 7.32 3.064 7.32 2.296C7.32 1.528 6.744 0.952 5.952 0.952Z"
											fill="#717171"
										/>
									</svg>
								</button>
								<div className="start_page_catalog__products__item__counter__plate__quantity">
									{selectedQuantity[index]}
								</div>
								<button
									className="start_page_catalog__products__item__counter__plate__button"
									onClick={() => {
										ls.increaseProductsQuantity(index);
									}}
								>
									<svg
										width="13"
										height="13"
										viewBox="0 0 13 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.744 12.152C7.632 12.152 8.304 11.48 8.304 10.568V7.808H11.184C12.12 7.808 12.648 7.112 12.648 6.344C12.648 5.552 12.12 4.88 11.184 4.88H8.304V2.096C8.304 1.208 7.632 0.535999 6.744 0.535999C5.856 0.535999 5.208 1.208 5.208 2.096V4.88H2.28C1.32 4.88 0.792 5.552 0.792 6.344C0.792 7.112 1.32 7.808 2.28 7.808H5.208V10.568C5.208 11.48 5.856 12.152 6.744 12.152Z"
											fill="#008CE6"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div className="start_page_catalog__products__item__price">
							{it.price}₽<span>/{it.mesure}</span>
						</div>
						<div className="start_page_catalog__products__item__description">{it.description}</div>
						<div className="start_page_catalog__products__item__properties">
							{it.properties.map((i, index) => (
								<p key={index}>{i}</p>
							))}
						</div>
						<div className="start_page_catalog__products__item__button" onClick={() => {}}>
							<div>
								<span>В корзину</span>
								<div>
									<svg
										width="20"
										height="18"
										viewBox="0 0 20 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M16.9929 2.63881C16.5454 1.51958 15.4777 0.796912 14.2726 0.796912H14.1016V0.210938H5.89845V0.796873H5.72735C4.52229 0.796873 3.45455 1.51958 3.00708 2.63877L1.12668 7.24221H0V8.41408H0.842861C1.11234 8.41408 1.34584 8.59663 1.41163 8.85753L3.35042 16.4581C3.54609 17.2415 4.24761 17.789 5.05559 17.789H14.9444C15.7524 17.789 16.493 17.2414 16.6886 16.4575L18.5884 8.85809C18.6542 8.59659 18.8876 8.41408 19.1571 8.41408H20V7.24221H18.8733L16.9929 2.63881ZM7.07032 15.4453H5.89845V9.58595H7.07032V15.4453ZM10.5859 15.4453H9.41406V9.58595H10.5859V15.4453ZM14.1016 15.4453H12.9297V9.58595H14.1016V15.4453ZM4.09545 3.07369C4.36379 2.40252 5.00469 1.96878 5.72735 1.96878H5.89845V2.55468H14.1016V1.96874H14.2727C14.9954 1.96874 15.6363 2.40248 15.9046 3.07365L17.6111 7.24217H2.38894L4.09545 3.07369Z"
											fill="white"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="start_page_catalog__footer">
				<div className="start_page_catalog__footer__wrapper">
					<div className="start_page_catalog__footer__wrapper__logo">
						<img src={logoSVG} alt="logo_whiteSVG" />
					</div>
					<div className="start_page_catalog__footer__wrapper__feedback">
						<div className="start_page_catalog__footer__wrapper__feedback__phone">
							<span>8 800 800 - 80 - 80</span>
						</div>
						<div className="start_page_catalog__footer__wrapper__feedback__mail">
							<span>info@ledvled.ru</span>
						</div>
						<div className="start_page_catalog__footer__wrapper__feedback__adress">
							<span>ООО «Глобал» г. Омск, ул. Звездова 129</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
