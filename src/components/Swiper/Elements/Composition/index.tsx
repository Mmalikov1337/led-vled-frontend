import Router from "next/router";
import React from "react";
// import { NavLink } from 'react-router-dom'

import peachPNG from "../../../../assets/images/peach.png";

export default function Composition() {
	const [isLoaded, setIsLoaded] = React.useState(false);
	React.useEffect(() => {
		setIsLoaded(true);
	}, []);
	return (
		<div className="composition" id="composition">
			<div className="composition__wrapper">
				<div className="text-part">
					<div className="composition__wrapper__title">
						<h2>Натуральные ингредиенты</h2>
					</div>
					<div className="composition__wrapper__under-title">
						{/* <NavLink to="/catalog"> */}
						<div
							className="composition__wrapper__under-title__button"
							onClick={() => {
								// Router.push(
								// 	{
								// 		pathname: "/",
								// 	},
								// 	undefined,
								// 	{ shallow: true }
								// );
								if(isLoaded )window.history.replaceState(null, "", "/");
							}}
						>
							<div>
								<span>Каталог</span>
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

						<div className="composition__wrapper__under-title__description">
							<p className="composition__wrapper__under-title__description__top">
								Наше мороженное не содержит химии и вредных добавок
							</p>
							<h3 className="composition__wrapper__under-title__description__list-title">
								В составе:
							</h3>
							<ul className="composition__wrapper__under-title__description__list">
								<li className="composition__wrapper__under-title__description__list__item">Вода</li>
								<li className="composition__wrapper__under-title__description__list__item">
									Ароматизатор
								</li>
								<li className="composition__wrapper__under-title__description__list__item">
									Сахар
								</li>
								<li className="composition__wrapper__under-title__description__list__item">
									Стабилизатор
									<span>произовдятся на основе натуральных фруктов и ягод</span>
								</li>
							</ul>
							<p className="composition__wrapper__under-title__description__bottom">
								Мороженое <span>Лёд Влёд</span> можно заморозить и съесть, просто выпить, добавить в
								напиток или приготовить освежающий коктейль.
							</p>
						</div>
					</div>
				</div>

				<div className="composition__wrapper__circle">
					<img src={peachPNG} alt="peachPNG" />

					{/* <svg width="582" height="582" viewBox="0 0 582 582" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="291" cy="291" r="291" fill="#FBB35E" />
                    </svg> */}
				</div>
			</div>
		</div>
	);
}
