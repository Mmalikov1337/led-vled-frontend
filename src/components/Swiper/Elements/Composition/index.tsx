import NextButton from "@src/components/Buttons/NextButton";
import CatalogPage from "@src/components/Catalog";
import { catalogURL } from "@src/config";
import toPage from "@src/helpers/toPage";
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
						<NextButton
							classes={["btn", "b-yellow", "btn-sm", "composition__wrapper__under-title__button"]}
							onClick={() => {
								toPage(catalogURL);
							}}
							text="Каталог"
						/>
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
