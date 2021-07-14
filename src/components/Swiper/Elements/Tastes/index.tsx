import React from "react";
import Scroll from "react-scroll";

import starSVG from "./../../../../assets/images/star_full.svg";
import shadowPNG from "./../../../../assets/images/shadow.png";
import LocalStorageHepler from "@src/helpers/localStorageHelper";
import { tempItems } from "@src/config";
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
const scrollToId = (id) => {
	Scroll.scroller.scrollTo(id, {
		duration: 1000,
		delay: 0,
		smooth: true,
		horizontal: true,
		containerId: "slider",
		ignoreCancelEvents: true,
	});
};

export default function Tastes() {
	// const [selectedQuantity, setSelectedQuantity] = React.useState(() => { [...Array(tempItems.length)].fill(0) });
	const [isLoaded, setIsLoaded] = React.useState(false);

	const [slideIndex, setSlideIndex] = React.useState(() => 0);
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

	const nextSlide = () => setSlideIndex(slideIndex < maxIndex ? slideIndex + 1 : 0);

	const prewSlide = () => setSlideIndex(() => (slideIndex >= 1 ? slideIndex - 1 : maxIndex));

	React.useEffect(() => scrollToId(`slide_${slideIndex}`), [slideIndex]);
	if (!isLoaded) {
		return <h1>LOADING</h1>;
	}

	return (
		<div className="tastes" id="tastes">
			<div className="tastes__wrapper">
				<div className="tastes__text">
					<div className="tastes__text__title">
						<h3>Любимые вкусы</h3>
					</div>
					<div className="tastes__text__description">
						<p>
							Из нашей коллекции <span>Лёд Влёд</span> каждый сможет выбрать для себя
							мороженое по вкусу
						</p>
					</div>
				</div>
				<div className="tastes__slider">
					<div className="tastes__slider__button" onClick={prewSlide}>
						<svg
							width="9"
							height="15"
							viewBox="0 0 9 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0.333149 8.0853L7.00834 14.7604C7.16273 14.9149 7.36882 15 7.58858 15C7.80833 15 8.01443 14.9149 8.16882 14.7604L8.6604 14.2689C8.98027 13.9487 8.98027 13.4282 8.6604 13.1084L3.05508 7.50311L8.66662 1.89157C8.82101 1.73706 8.90625 1.53108 8.90625 1.31145C8.90625 1.09158 8.82101 0.885602 8.66662 0.730968L8.17504 0.239632C8.02053 0.0851201 7.81455 -9.54393e-08 7.5948 -1.14651e-07C7.37504 -1.33862e-07 7.16895 0.08512 7.01456 0.239631L0.333149 6.9208C0.178394 7.0758 0.093395 7.28274 0.0938832 7.50274C0.0933949 7.72359 0.178394 7.93042 0.333149 8.0853Z"
								fill="#56BDFF"
							/>
						</svg>
					</div>

					<div className="tastes__slider__content" id="slider">
						{" "}
						{/*  !!!!!!!  */}
						{tempItems.map((it, index) => (
							<div
								className="tastes__slider__slide"
								key={index}
								id={`slide_${index}`}
							>
								<div className="tastes__slider__slide__top">
									<div className="tastes__slider__slide__rating">
										{it.rating}
										<img src={starSVG} alt="starSVG" />
									</div>

									<div className="tastes__slider__slide__content">
										<Circle color={it.mainColor} width="147" height="147" />
										<img
											src={shadowPNG}
											alt="starSVG"
											className="tastes__slider__slide__content__product__shadow"
										/>
										<img
											src={it.pic}
											alt="prodPNG"
											className="tastes__slider__slide__content__product"
										/>
									</div>
								</div>

								<div className="tastes__slider__slide__title">
									<h4>{it.title}</h4>
								</div>
								<div className="tastes__slider__slide__counter">
									<div className="tastes__slider__slide__counter__plate">
										<button
											className="tastes__slider__slide__counter__plate__button"
											onClick={() => ls.decreaseProductsQuantity(index)}
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
										<div className="tastes__slider__slide__counter__plate__quantity">
											{selectedQuantity[index]}
										</div>
										<button
											className="tastes__slider__slide__counter__plate__button"
											onClick={() => ls.increaseProductsQuantity(index)}
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
								<div className="tastes__slider__slide__price">
									{it.price}
									<span>/{it.mesure}</span>
								</div>
								<div className="tastes__slider__slide__description">
									{it.description}
								</div>
								<div className="tastes__slider__slide__properties">
									{it.properties.map((i, index) => (
										<p key={index}>{i}</p>
									))}
								</div>
								<div
									className="tastes__slider__slide__button"
									onClick={
										() => {}
										// ChangeQuantity.setSelectedQuantityToStorage(
										// 	index,
										// 	selectedQuantity[index]
										// )
									}
								>
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

					<div className="tastes__slider__button" onClick={nextSlide}>
						<svg
							width="9"
							height="15"
							viewBox="0 0 9 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z"
								fill="#56BDFF"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
