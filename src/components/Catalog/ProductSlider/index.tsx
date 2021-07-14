//@ts-nocheck
import React from "react";
import { tempProducts } from "@src/config";

const Circle = ({ currentProduct, setCurrentProduct, circleFill, pinFill, pinStroke, paused }) => {
	return (
		<svg
			width={768}
			height={768}
			viewBox="0 0 1300 1300"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="start_page_catalog_svg"
		>
			<circle cx={1300 / 2} cy={1300 / 2} r={620} fill={circleFill} viewBox="0 0 1300 1300" />
			<path
				className="circle__nav_arc zxc"
				d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526"
				strokeWidth={2}
			/>
			<path
				data-slide={0}
				className={`circle__nav_arc circle__nav_arc--front ${
					currentProduct  === 0 && !paused ? "active-line" : ""
				}`}
				d="M 635.0014632766333,1269.8185572376467 A 620,620 0 0, 1 120.72065205686215,972.8983924408526"
				strokeWidth={3}
				strokeDasharray="619.2624817418906"
				strokeDashoffset="619.2624817418906"
				style={{ opacity: 1 }}
			/>
			<path
				className="circle__nav_arc"
				d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206"
				strokeWidth={2}
			/>
			<path
				data-slide={1}
				className={`circle__nav_arc circle__nav_arc--front ${
					currentProduct  === 1 && !paused ? "active-line" : ""
				}`}
				d="M 105.72211533349571,946.9201647967941 A 620,620 60 0, 1 105.7221153334956,353.079835203206"
				strokeWidth={3}
				strokeDasharray="619.2624817418906"
				strokeDashoffset="619.2624817418906"
				style={{ opacity: 1 }}
			/>
			<path
				className="circle__nav_arc"
				d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533"
				strokeWidth={2}
			/>
			<path
				data-slide={2}
				className={`circle__nav_arc circle__nav_arc--front ${
					currentProduct  === 2 && !paused ? "active-line" : ""
				}`}
				d="M 120.72065205686226,327.1016075591472 A 620,620 120 0, 1 635.0014632766338,30.1814427623533"
				strokeWidth={3}
				strokeDasharray="619.2624817418906"
				strokeDashoffset="619.2624817418906"
				style={{ opacity: 1 }}
			/>
			<path
				className="circle__nav_arc"
				d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147"
				strokeWidth={2}
			/>
			<path
				data-slide={3}
				className={`circle__nav_arc circle__nav_arc--front ${
					currentProduct  === 3 && !paused ? "active-line" : ""
				}`}
				d="M 664.9985367233666,30.1814427623533 A 620,620 180 0, 1 1179.2793479431375,327.101607559147"
				strokeWidth={3}
				strokeDasharray="619.2624817418906"
				strokeDashoffset="619.2624817418906"
				style={{ opacity: 1 }}
			/>
			<path
				className="circle__nav_arc"
				d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939"
				strokeWidth={2}
			/>
			<path
				data-slide={4}
				className={`circle__nav_arc circle__nav_arc--front ${
					currentProduct  === 4 && !paused ? "active-line" : ""
				}`}
				d="M 1194.2778846665042,353.0798352032058 A 620,620 240 0, 1 1194.2778846665046,946.9201647967939"
				strokeWidth={3}
				strokeDasharray="619.2624817418906"
				strokeDashoffset="619.2624817418906"
				style={{ opacity: 1 }}
			/>
			<path
				className="circle__nav_arc"
				d="M 1179.2793479431384,972.8983924408517 A 620,620 300 0, 1 664.9985367233663,1269.8185572376467"
				strokeWidth={2}
			/>
			<path
				data-slide={5}
				className={`circle__nav_arc circle__nav_arc--front ${
					currentProduct  === 5 && !paused ? "active-line" : ""
				}`}
				d="M 1179.2793479431384,972.8983924408517 A 620,620 300 0, 1 664.9985367233663,1269.8185572376467"
				strokeWidth={3}
				strokeDasharray="619.2624817418906"
				strokeDashoffset="619.2624817418906"
				style={{ opacity: 1 }}
			/>

			<circle
				className="homeSlider__navigationPin"
				onClick={currentProduct === 0 && !paused ? () => {} : () => setCurrentProduct(0)}
				data-slide={0}
				r={24}
				fill={currentProduct === 0 && !paused ? "white" : pinFill}
				cx={650}
				cy={1270}
				strokeWidth={currentProduct === 0 && !paused ? 2 : 26}
				data-cy="sliderPin"
				style={{ transformOrigin: "0px 0px 0px" }}
				data-svg-origin="650 1270"
				transform="matrix(1,0,0,1,0,0)"
				tabIndex={0}
				focusable="true"
			/>
			<circle
				className="homeSlider__navigationPinAfter"
				r={currentProduct === 0 && !paused ? 16 : 26}
				stroke={currentProduct === 0 && !paused ? "#008CE6" : pinStroke}
				cx={650}
				cy={1270}
				strokeWidth={currentProduct === 0 && !paused ? 20 : 4}
				data-cy="sliderPinAfter"
			/>

			<circle
				className="homeSlider__navigationPin"
				onClick={currentProduct === 1 && !paused ? () => {} : () => setCurrentProduct(1)}
				data-slide={1}
				r={24}
				fill={currentProduct === 1 && !paused ? "white" : pinFill}
				cx="113.06424965364795"
				cy={960}
				strokeWidth={currentProduct === 1 && !paused ? 2 : 26}
				data-cy="sliderPin"
				tabIndex={0}
				focusable="true"
				style={{ transformOrigin: "0px 0px 0px" }}
				data-svg-origin="113.06424713134766 960"
				transform="matrix(1,0,0,1,0,0)"
			/>
			<circle
				className="homeSlider__navigationPinAfter"
				r={currentProduct === 1 && !paused ? 16 : 26}
				stroke={currentProduct === 1 && !paused ? "#008CE6" : pinStroke}
				cx="113.06424965364795"
				cy={960}
				strokeWidth={currentProduct === 1 && !paused ? 20 : 4}
				data-cy="sliderPinAfter"
			/>

			<circle
				className="homeSlider__navigationPin"
				onClick={currentProduct === 2 && !paused ? () => {} : () => setCurrentProduct(2)}
				data-slide={2}
				r={24}
				fill={currentProduct === 2 && !paused ? "white" : pinFill}
				cx="113.06424965364806"
				cy="339.99999999999994"
				strokeWidth={currentProduct === 2 && !paused ? 2 : 26}
				data-cy="sliderPin"
				tabIndex={0}
				focusable="true"
				style={{ transformOrigin: "0px 0px 0px" }}
				data-svg-origin="113.06424713134766 340"
				transform="matrix(1,0,0,1,0,0)"
			/>
			<circle
				className="homeSlider__navigationPinAfter"
				r={currentProduct === 2 && !paused ? 16 : 26}
				stroke={currentProduct === 2 && !paused ? "#008CE6" : pinStroke}
				cx="113.06424965364806"
				cy="339.99999999999994"
				strokeWidth={currentProduct === 2 && !paused ? 20 : 4}
				data-cy="sliderPinAfter"
			/>

			<circle
				className="homeSlider__navigationPin homeSlider__navigationPin--active"
				onClick={currentProduct === 3 && !paused ? () => {} : () => setCurrentProduct(3)}
				fill={currentProduct === 3 && !paused ? "white" : pinFill}
				data-slide={3}
				r={24}
				cx="649.9999999999999"
				cy={30}
				strokeWidth={currentProduct === 3 && !paused ? 2 : 26}
				data-cy="sliderPin"
				tabIndex={-1}
				focusable="true"
				style={{ transformOrigin: "0px 0px 0px" }}
				data-svg-origin="650 30"
				transform="matrix(1,0,0,1,0,0)"
			/>
			<circle
				className="homeSlider__navigationPinAfter"
				r={currentProduct === 3 && !paused ? 16 : 26}
				stroke={currentProduct === 3 && !paused ? "#008CE6" : pinStroke}
				cx="649.9999999999999"
				cy={30}
				strokeWidth={currentProduct === 3 && !paused ? 20 : 4}
				data-cy="sliderPinAfter"
			/>

			<circle
				className="homeSlider__navigationPin _2"
				onClick={currentProduct === 4 && !paused ? () => {} : () => setCurrentProduct(4)}
				data-slide={4}
				r={24}
				fill={currentProduct === 4 && !paused ? "white" : pinFill}
				cx="1186.9357503463518"
				cy="339.9999999999997"
				strokeWidth={currentProduct === 4 && !paused ? 2 : 26}
				data-cy="sliderPin"
				tabIndex={0}
				focusable="true"
				style={{ transformOrigin: "0px 0px 0px" }}
				data-svg-origin="1186.935791015625 340"
				transform="matrix(1,0,0,1,0,0)"
			/>
			<circle
				className="homeSlider__navigationPinAfter"
				r={currentProduct === 4 && !paused ? 16 : 26}
				stroke={currentProduct === 4 && !paused ? "#008CE6" : pinStroke}
				cx="1186.9357503463518"
				cy="339.9999999999997"
				strokeWidth={currentProduct === 4 && !paused ? 20 : 4}
				data-cy="sliderPinAfter"
			/>

			<circle
				className="homeSlider__navigationPin"
				onClick={currentProduct === 5 && !paused ? () => {} : () => setCurrentProduct(5)}
				data-slide={5}
				r={24}
				fill={currentProduct === 5 && !paused ? "white" : pinFill}
				cx="1186.935750346352"
				cy="959.9999999999995"
				strokeWidth={currentProduct === 5 && !paused ? 2 : 26}
				data-cy="sliderPin"
				tabIndex={0}
				focusable="true"
				style={{ transformOrigin: "0px 0px 0px" }}
				data-svg-origin="1186.935791015625 960"
				transform="matrix(1,0,0,1,0,0)"
			/>
			<circle
				className="homeSlider__navigationPinAfter"
				r={currentProduct === 5 && !paused ? 16 : 26}
				cx="1186.935750346352"
				stroke={currentProduct === 5 && !paused ? "#008CE6" : pinStroke}
				cy="959.9999999999995"
				strokeWidth={currentProduct === 5 && !paused ? 20 : 4}
				data-cy="sliderPinAfter"
			/>
		</svg>
	);
};
const parallax = (event, targetArray, parallaxOptions) => {
	targetArray[0].style.transform = `translate(${
		(event.clientX / 30) * parallaxOptions[0].parallaxCoefficientX
	}px, ${(event.clientY / 50) * parallaxOptions[0].parallaxCoefficientY}px)`;
	targetArray[1].style.transform = `translate(${
		(event.clientX / 55) * parallaxOptions[1].parallaxCoefficientX
	}px, ${(event.clientY / 70) * parallaxOptions[1].parallaxCoefficientY}px)`;
	targetArray[2].style.transform = `translate(${
		(event.clientX / 80) * parallaxOptions[2].parallaxCoefficientX
	}px, ${(event.clientY / 90) * parallaxOptions[2].parallaxCoefficientY}px)`;
};
const getValidIndex = (index, maxIndex) => {
	if (index <= maxIndex && index >= 0) return index;
	if (index > maxIndex) return 0;
	if (index < 0) return maxIndex;
};
const getRef = (prewRef, selectedRef, nextRef, currentProduct, index, productsLastIndex) => {
	if (index === currentProduct) return selectedRef;
	if (getValidIndex(currentProduct + 1, productsLastIndex) === index) return nextRef;
	if (getValidIndex(currentProduct - 1, productsLastIndex) === index) return prewRef;
	return React.createRef();
};

const swipeDelay = 10000;
const productsLastIndex = tempProducts.length - 1;

const nextProduct = (setCirclePin, currentProduct, setCurrentProduct, selectedRef, prewRef) => {
	let p = new Promise((res) => {
		selectedRef.current.classList.add("change-product");
		if (currentProduct < productsLastIndex) setCirclePin(currentProduct + 1);
		else setCirclePin(0);
		prewRef.current.classList.remove("change-product");
		setTimeout(() => {
			if (currentProduct < productsLastIndex) setCurrentProduct(currentProduct + 1);
			else setCurrentProduct(0);
			res(null);
		}, 1000);
	});
	p.then(() => {
		let pics = [
			...prewRef.current.querySelectorAll(
				".start_page_slider__item__background__layer__picture"
			),
		];
		pics.map((i) => i.classList.add("init_pos"));
	});
};
const setProduct = (nextIndex, containerRef, setCurrentProduct, setCirclePin) => {
	setCirclePin(nextIndex);
	setCurrentProduct(nextIndex);
	let allBackgroundImages = [
		...containerRef.current.querySelectorAll(
			".start_page_slider__item__background__layer__picture"
		),
	];
	allBackgroundImages.map((i) => i.classList.add("init_pos"));
};
export default function ProductSlider(/*{ id }*/ { currentPage }) {
	const nextPage,
		prewPage = () => {};
	const [currentProduct, setCurrentProduct] = React.useState(0);
	const [currentCirclePin, setCirclePin] = React.useState(0);
	const [paused, setPaused] = React.useState(false);
	const prewRef = React.useRef(null);
	const selectedRef = React.useRef(null);
	const nextRef = React.useRef(null);
	const containerRef = React.useRef(null);

	const [isLoaded, setIsLoaded] = React.useState(false);

	React.useEffect(() => {
		if(!isLoaded) return
		const timer = setInterval(() => {
			if (!paused) {
				nextProduct(setCirclePin, currentProduct, setCurrentProduct, selectedRef, prewRef);
			}
		}, swipeDelay);
		if (!paused) {
			const pictures = Array(...selectedRef.current.querySelectorAll(".init_pos"));
			pictures
				.sort((a, b) => a.id - b.id)
				.map((pic, index) => {
					setTimeout(() => {
						pic.classList.remove("init_pos");
					}, 500 + index * 100);
				});
		}
		console.log("paused", paused);

		return () => {
			console.log("cleared");
			clearInterval(timer);
		};
	});
	React.useEffect(() => {
		document.body.style.overflow = "hidden";
		prewPage();
		return () => console.log("UNMOUNTED");
	}, []);
	React.useEffect(() => {
		setTimeout(() => {
			if (currentPage !== 0) {
				//другая страница
				setCurrentProduct(0);
				setCirclePin(0);
				setPaused(true);
			} else {
				//эта страница
				setPaused(false);
			}
			console.log(currentPage, paused);
		}, 2000);
	}, [currentPage]);

	React.useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (!isLoaded) {
		return <h1>LOADING</h1>;
	}

	return (
		<div
			className="start_page_slider"
			onMouseMove={(event) =>
				parallax(
					event,
					selectedRef.current.querySelectorAll(
						".start_page_slider__item__background__layer"
					),
					tempProducts[currentProduct].layerOptions
				)
			}
			// id={id}
		>
			<div className="start_page_slider__container" ref={containerRef}>
				{tempProducts.map((product, index) => (
					<div
						className={`start_page_slider__item ${
							index === currentProduct ? "active-item" : ""
						}`}
						key={index}
						ref={getRef(
							prewRef,
							selectedRef,
							nextRef,
							currentProduct,
							index,
							productsLastIndex
						)}
						style={{
							zIndex: `${
								index === currentProduct
									? "4"
									: index === getValidIndex(currentProduct + 1, productsLastIndex)
									? "3"
									: "2"
							}`,
						}}
					>
						<div
							className="start_page_slider__item__background"
							style={product.backgroundStyle}
						>
							{product.layerOptions.map((layerOption, layerOptionIndex) => (
								<div
									className="start_page_slider__item__background__layer"
									key={`${index}_${layerOptionIndex}`}
									style={layerOption.layerStyle}
								>
									{layerOption.bgItems.map((bgItem, bgItemIndex) => (
										<img
											src={bgItem.pic}
											alt={`bgItem.pic_${bgItemIndex}`}
											style={{
												...bgItem.style.size,
												...bgItem.style.position,
												...bgItem.style.transform,
											}}
											key={`${index}_${layerOptionIndex}_${bgItemIndex}`}
											className="start_page_slider__item__background__layer__picture init_pos"
											id={`${bgItem.RTLIndex}`}
										/>
									))}
								</div>
							))}
							{product.noAnimatedBG && (
								<div className="start_page_slider__item__background__no-animated">
									{product.noAnimatedBG.map((it, index) => (
										<img
											src={it.pic}
											alt="it.pic"
											style={{
												...it.style.size,
												...it.style.position,
												...it.style.transform,
											}}
											key={`${index}i`}
										/>
									))}
								</div>
							)}
						</div>
						<div className="start_page_slider__item__background-side">
							<span
								className="start_page_slider__item__background-side__hash"
								style={{ color: product.sideTextColor }}
							>
								<span>#</span>лёдвлёд
							</span>
							<div
								className="start_page_slider__item__background-side__button"
								onClick={nextPage}
							>
								<div>
									<span>Каталог</span>
									<div>
										<svg
											width="15"
											height="9"
											viewBox="0 0 15 9"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M8.0853 8.66685L14.7604 1.99166C14.9149 1.83727 15 1.63118 15 1.41142C15 1.19167 14.9149 0.985572 14.7604 0.831183L14.2689 0.339602C13.9487 0.0197263 13.4282 0.0197263 13.1084 0.339602L7.50311 5.94492L1.89157 0.333382C1.73706 0.178993 1.53108 0.0937502 1.31145 0.0937502C1.09158 0.0937502 0.885602 0.178993 0.730968 0.333382L0.239632 0.824964C0.0851202 0.979475 1.30184e-08 1.18545 1.56389e-08 1.4052C1.82595e-08 1.62496 0.0851202 1.83105 0.239632 1.98544L6.9208 8.66685C7.0758 8.82161 7.28275 8.90661 7.50274 8.90612C7.7236 8.90661 7.93042 8.82161 8.0853 8.66685Z"
												fill="#008CE6"
											/>
										</svg>
									</div>
								</div>
							</div>
							<span
								style={{ color: product.sideTextColor }}
								className="start_page_slider__item__background-side__phone"
							>
								8 800 800 - 80 - 80
							</span>
						</div>

						<div className="start_page_slider__item__wrapper">
							<div className="start_page_slider__item__wrapper__circle">
								<p className="start_page_slider__item__wrapper__circle__ccal">
									{product.ccal}
								</p>
								<p className="start_page_slider__item__wrapper__circle__ml">
									{product.ml}
								</p>
								<p className="start_page_slider__item__wrapper__circle__title">
									{product.title}
								</p>
								<div className="start_page_slider__item__wrapper__circle__secondary">
									{product.secondatyImage.map((i, index) => (
										<img src={i.pic} alt="i.pic" key={index} style={i.styles} />
									))}
								</div>
								<img src={product.image} alt="product.image" className="image" />
								<Circle
									currentProduct={currentCirclePin}
									setCurrentProduct={(index) =>
										setProduct(
											index,
											containerRef,
											setCurrentProduct,
											setCirclePin
										)
									}
									circleFill={product.circleFill}
									pinFill={product.pinFill}
									pinStroke={product.pinStroke}
									paused = {paused}
								/>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
