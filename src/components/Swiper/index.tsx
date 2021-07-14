import React from "react";
// import Scroll from 'react-scroll';

import Elements from "./Elements";
import Router from "next/router";

import logo_whiteSVG from "./../../assets/images/logo_white.svg";
import contactBgTextXVG from "./../../assets/images/contacts_bg_text.svg";
import contactBgSnowflakeXVG from "./../../assets/images/contacts_bg_snowflake.svg";
import littleBgSnowflakeXVG from "./../../assets/images/little_bg_snowflake.svg";
import partnetBGSVG from "./../../assets/images/partners_bg_snowflake.svg";
import partnetBGTextSVG from "./../../assets/images/partners_bg_text.svg";
import partnetBGText2SVG from "./../../assets/images/partners_bg_text_2.svg";
import littleBgSnowflakeRevXVG from "./../../assets/images/partners_bg_snowflake_rev.svg";
import LocalStorageHepler from "@src/helpers/localStorageHelper";

const links = [
	{
		title: "Состав",
		id: "composition",
		style: {},
	},
	{
		title: "Как использовать",
		id: "usage",
		style: {},
	},
	{
		title: "Цена",
		id: "price",
		style: {},
	},
	{
		title: "Доставка",
		id: "delivery",
		style: {},
	},
	{
		title: "Любимые вкусы",
		id: "tastes",
		style: {},
	},
	{
		title: "Партнёрам",
		id: "partners",
		style: {
			background: `
		url(${littleBgSnowflakeXVG}) bottom -154px right 75% no-repeat,
		url(${partnetBGSVG}) center right 58% no-repeat,
		url(${partnetBGTextSVG}) top 17% right 12% no-repeat,
		url(${partnetBGText2SVG}) bottom 200px left 5% no-repeat,
		url(${littleBgSnowflakeRevXVG}) top right 20% no-repeat`,
			backgroundSize: "292px, 757px, 490px 150px, 360px 150px, 200px",
		},
	},
	{
		title: "Контакты",
		id: "contacts",
		style: {
			background: `url(${contactBgTextXVG}) center right 30% no-repeat,
		url(${contactBgSnowflakeXVG}) right center no-repeat,
		url(${littleBgSnowflakeXVG}) top 150px right 45% no-repeat,
		url(${littleBgSnowflakeXVG}) bottom -154px right 55% no-repeat`,

			backgroundSize: "7%,20%,150px 150px, 300px",
		},
	},
];

const LinksList = ({ links, currentPage, setCurrentPage }) => {
	return (
		<ul className="swiper__navbar__list">
			{links.map((it, index) => (
				<li
					className={`swiper__navbar__list__link ${currentPage === index ? "active" : ""}`}
					onClick={() => setCurrentPage(index)}
					key={index}
				>
					{it.title}
				</li>
			))}
		</ul>
	);
};

const ArrowSVG = ({ toUp, func, active, setActive }) => {
	return (
		<div
			className={`swipe-arrow ${toUp ? "down" : "up"}`}
			onMouseEnter={() => setActive(toUp ? [true, false] : [false, true])}
			onMouseLeave={() => setActive(toUp ? [false, false] : [false, false])}
			onClick={func}
		>
			<svg
				width="20"
				height="13"
				viewBox="0 0 20 13"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.7804 12.1054L19.6805 3.2134C19.8865 3.00774 20 2.7332 20 2.44046C20 2.14773 19.8865 1.87319 19.6805 1.66753L19.0252 1.01269C18.5982 0.586589 17.9042 0.586589 17.4779 1.01269L10.0041 8.47953L2.52209 1.00441C2.31608 0.798748 2.04145 0.685195 1.7486 0.685195C1.45543 0.685195 1.1808 0.798747 0.974625 1.00441L0.319508 1.65924C0.113495 1.86507 -6.36262e-08 2.13945 -7.64339e-08 2.43218C-8.92416e-08 2.72491 0.113495 2.99945 0.319507 3.20511L9.22773 12.1054C9.43439 12.3116 9.71033 12.4248 10.0037 12.4241C10.2981 12.4248 10.5739 12.3116 10.7804 12.1054Z"
					fill={`${active[toUp ? 0 : 1] ? "white" : "#56BDFF"}`}
				/>
			</svg>
		</div>
	);
};
function Footer(currentPage) {
	return (
		<div className="swiper__footer">
			<div className="swiper__footer__wrapper">
				<div className="swiper__footer__wrapper__logo">
					<img src={logo_whiteSVG} alt="logo_whiteSVG" />
				</div>
				<Feedback currentPage={currentPage} />
			</div>
		</div>
	);
}
const Feedback = ({ currentPage }) => {
	return (
		<div className="swiper__footer__wrapper__feedback">
			{currentPage !== 6 && (
				<React.Fragment>
					<div className="swiper__footer__wrapper__feedback__phone">
						<span>8 800 800 - 80 - 80</span>
					</div>
					<div className="swiper__footer__wrapper__feedback__mail">
						<span>info@ledvled.ru</span>
					</div>
					<div className="swiper__footer__wrapper__feedback__adress">
						<span>ООО «Глобал» г. Омск, ул. Звездова 129</span>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};
export default function Swiper({ id, link, toStarterPage, newSwiperPage }) {
	// const [swiperPage, setSwiperPage] = React.useState(0);

	const [currentPage, setCurrentPage] = React.useState(0);
	const [active, setActive] = React.useState([false, false]);
	const [heightOfLine, setHeightOfLine] = React.useState(null);
	const [swiperPause, setSwiperPause] = React.useState(false);

	// const ref = React.useRef(null);
	React.useEffect(() => {
		// console.log("newSwiperPage",newSwiperPage);

		if (newSwiperPage) {
			// console.log("SET");

			setCurrentPage(newSwiperPage);
		}
	}, []);

	// React.useEffect(() => {

	// }, [ setSwiperPage]);
	// React.useEffect(() => {
	// 	setSwiperPage(currentPage);
	// }, [currentPage]);

	const toTop = () => {
		if (swiperPause) return;
		setCurrentPage(currentPage < links.length - 1 ? currentPage + 1 : links.length - 1);
		let swiped = new Promise(function (resolve) {
			setHeightOfLine("to_top");
			setSwiperPause(true);
			resolve(null);
		});
		swiped.then(() => {
			setTimeout(() => {
				setHeightOfLine(null);
				setSwiperPause(false);
			}, 1000);
		});
	};

	const toBottom = () => {
		if (swiperPause) return;
		if (currentPage > 0) setCurrentPage(currentPage - 1);
		else {
			setCurrentPage(0);
			toStarterPage();
			
		}
		let swiped = new Promise(function (resolve) {
			setHeightOfLine("to_bottom");
			setSwiperPause(true);
			resolve(null);
		});
		swiped.then(() => {
			setTimeout(() => {
				setHeightOfLine(null);
				setSwiperPause(false);
			}, 1000);
		});
	};

	return (
		<div className="swiper" id={id}>
			<div
				className={`swiper__background ${heightOfLine ? `${heightOfLine}-bg` : ""}`}
				style={links[currentPage].style}
			></div>

			<div className="swiper__navbar">
				<LinksList links={links} currentPage={currentPage} setCurrentPage={setCurrentPage} />
				<div className="swiper__navbar__catalog">
					<svg
						width="30"
						height="16"
						viewBox="0 0 30 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="30" height="2" rx="1" fill="white" />
						<rect y="7" width="30" height="2" rx="1" fill="white" />
						<rect y="14" width="30" height="2" rx="1" fill="white" />
					</svg>
					Каталог
				</div>
			</div>
			<div className="main-block" id="main-block">
				<div className="swiper__sidebar">
					<div className="sidebar-container">
						<div className="swiper__sidebar__hash">
							<p>
								<span>#</span>лёдвлёд
							</p>
						</div>
						<div className="swiper__sidebar__progress-line">
							<div className="swiper__sidebar__progress-line__index">0{currentPage + 1}</div>
							<div className="swiper__sidebar__progress-line__line-holder">
								<div
									className={`swiper__sidebar__progress-line__line-holder__line ${
										heightOfLine ? heightOfLine : ""
									}`}
								></div>
								<div className="swiper__sidebar__progress-line__line-holder__arrows">
									<ArrowSVG toUp={true} func={toTop} active={active} setActive={setActive} />
									<ArrowSVG toUp={false} func={toBottom} active={active} setActive={setActive} />
								</div>
							</div>
							<div className="swiper__sidebar__progress-line__page">{links[currentPage].title}</div>
						</div>
					</div>
				</div>
				<div className="swiper__main" ref={link}>
					<Elements
						toTop={toTop}
						toBottom={toBottom}
						currentPage={currentPage}
						swiperPause={swiperPause}
					/>
				</div>
				<div className="swiper__logo">
					<p className="elements__background-holder__logo">
						Сделано в <span>REJI</span>
					</p>
				</div>
			</div>
			<Footer currentPage={currentPage} />
		</div>
	);
}
