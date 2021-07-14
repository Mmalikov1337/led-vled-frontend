import React from "react";
import Scroll from "react-scroll";

import germanySVG from "@images/germany.svg";
import bodySVG from "@images/body.svg";
import drinkSVG from "@images/drink.svg";

import starSVG from "@images/star_full.svg";
import arrow_downSVG from "@images/arrow_down.svg";
import shadowPNG from "@images/shadow.png";
import { tempItems, ICompositionLink } from "@src/config";
interface ICircle {
	color: string;
	width: string;
	height: string;
}
const Circle = ({ color, width, height }:ICircle) => {
	return (
		<svg width={width} height={height} viewBox="0 0 582 582" xmlns="http://www.w3.org/2000/svg">
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
interface IComposition {
	nextPage: () => void;
	links: Array<ICompositionLink>;
}
export default function Composition({ nextPage, links }: IComposition) {
	const [rating, setRatingValue] = React.useState<number | null>(null);
	const [hover, setHover] = React.useState<number | null>(null);
	const [selectedItem, setSelectedItem] = React.useState(0);

	const price = "10₽";
	const tempProps = [
		{
			image: bodySVG,
			text: "Мало ккал, натурально, вкусно",
		},
		{
			image: drinkSVG,
			text: "Подходит для добавления в коктейли",
		},
	];
	// React.useEffect(() => {
	// 	document.body.style.overflow = "hidden";
	// 	const scrollTo = () => {
	// 		Scroll.scroller.scrollTo(links[0].id, {
	// 			duration: 1000,
	// 			delay: 0,
	// 			smooth: true,
	// 		});
	// 	};
	// 	scrollTo();
	// }, []);

	return (
		<div className="startpage">
			<div className="startpage">
				<div className="wrapper">
					<div className="startpage__description">
						<div className="startpage__description__content">
							<div className="startpage__description__content__made-in">
								<div className="startpage__description__content__made-in__box">
									<div className="startpage__description__content__made-in__box__text">
										<span>made in</span>
									</div>
									<div className="startpage__description__content__made-in__box__image">
										<img src={germanySVG} alt="germanySVG" />
									</div>
								</div>
							</div>
							<div className="startpage__description__content__title">
								<h1>Мороженное лёд влёд</h1>
							</div>
							<div className="startpage__description__content__values">
								<div className="startpage__description__content__values__stars">
									{[...Array(10)].map((_, index) => (
										<label key={index}>
											<input
												type="radio"
												name="rating"
												value={index + 1}
												onClick={() => setRatingValue(index + 1)}
											/>
											{index % 2 === 0 ? (
												<svg
													onMouseEnter={() => setHover(index + 1)}
													onMouseLeave={() => setHover(null)}
													width="10"
													height="20"
													viewBox="0 0 10 20"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className="left_star"
												>
													<path
														d="M9.99308 0.403893C9.21741 0.40694 8.56316 0.886211 8.32636 1.6249L6.79891 6.38961H1.7612C0.984512 6.38961 0.328118 6.86712 0.08901 7.60608C-0.150137 8.34504 0.102094 9.11658 0.731617 9.5716L4.79079 12.5056L3.23655 17.2891C2.99654 18.0278 3.24784 18.7996 3.87677 19.2553C4.50567 19.7111 5.3174 19.7096 5.94465 19.2516L9.99996 16.2901C10 16.2901 10 0.403854 10 0.403854C9.99773 0.403854 9.99535 0.403854 9.99308 0.403893Z"
														fill={
															index + 1 <= (hover || rating)!!
																? "#FFC800"
																: "#E4E4E4"
														}
													/>
													{/* < "#E4E4E4"*/}
												</svg>
											) : (
												<svg
													onMouseEnter={() => setHover(index + 1)}
													onMouseLeave={() => setHover(null)}
													width="10"
													height="20"
													xmlns="http://www.w3.org/2000/svg"
													className="right_star"
												>
													<rect
														fill="none"
														id="canvas_background"
														height="402"
														width="582"
														y="-1"
														x="-1"
													/>
													<path
														stroke="null"
														id="svg_1"
														fill={
															index + 1 <= (hover || rating)!!
																? "#FFC800"
																: "#E4E4E4"
														}
														d="m0.029625,0.40389c0.772143,0.00305 1.423418,0.48232 1.659141,1.22101l1.520504,4.76471l5.014801,0c0.773158,0 1.426563,0.47751 1.664586,1.21647c0.238062,0.73896 -0.013021,1.5105 -0.639688,1.96552l-4.040711,2.934l1.547172,4.7835c0.238919,0.7387 -0.011239,1.5105 -0.637309,1.9662c-0.62604,0.4558 -1.434079,0.4543 -2.058476,-0.0037l-4.036869,-2.9615c-0.00004,0 -0.00004,-15.88625 -0.00004,-15.88625c0.00226,0 0.004629,0 0.006889,0.00004z"
													/>
												</svg>
											)}
										</label>
									))}
								</div>
								<div className="startpage__description__content__values__price">
									<span>{price}</span>
								</div>
							</div>
							<div className="startpage__description__content__text">
								<p>
									Вкусное мороженное для детей и взрослых Подходит для добавления
									в коктейли
								</p>
							</div>
							<div className="startpage__description__content__properties">
								{tempProps.map((i, index) => (
									<div
										className="startpage__description__content__properties__item"
										key={index}
									>
										<div className="startpage__description__content__properties__item__pic">
											<img src={i.image} alt={`${index}_pic`} />
										</div>
										<span>{i.text}</span>
									</div>
								))}
							</div>
							{/* <NavLink to="/catalog"> */}

							<div className="startpage__description__content__button">
								<div>
									<span>Перейти в каталог</span>
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
							</div>

							{/* </NavLink> */}
						</div>
					</div>
					<div className="startpage__items">
						<div className="startpage__items__main">
							<div className="startpage__items__main__section">
								<div className="startpage__items__main__section__item">
									
									<div className="startpage__items__main__section__item__content">
									<div className="startpage__items__main__section__item__rating">
										{tempItems[selectedItem].rating}
										<img src={starSVG} alt="starSVG" />
									</div>
										<Circle
											color={tempItems[selectedItem].mainColor}
											width="582"
											height="582"
										/>
										<img
											src={shadowPNG}
											alt="starSVG"
											className="side_pic shadow"
										/>
										<img
											src={tempItems[selectedItem].pic}
											alt="prodPNG"
											className="side_pic"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="startpage__items__side">
							<div className="startpage__items__side__section">
								{tempItems
									.filter((i, index) => index !== selectedItem)
									.map((it, index) => (
										<div
											className="startpage__items__side__section__item"
											key={index}
											onClick={() => setSelectedItem(it.id-1)}
										>
											<div className="startpage__items__side__section__item__rating">
												{it.rating}
												<img src={starSVG} alt="starSVG" />
											</div>
											<div className="startpage__items__side__section__item__content">
												<Circle
													color={it.mainColor}
													width="147"
													height="147"
												/>
												<img
													src={shadowPNG}
													alt="starSVG"
													className="side_pic shadow"
												/>
												<img
													src={it.pic}
													alt="prodPNG"
													className="side_pic"
												/>
												<div />
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
				<div className="arrow-wrapper" onClick={nextPage}>
					<img src={arrow_downSVG} alt="arrow_downSVG" className="arrow_down" />
				</div>
			</div>
		</div>
	);
}
