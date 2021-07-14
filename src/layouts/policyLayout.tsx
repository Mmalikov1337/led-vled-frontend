import Link from "next/link";
import React from "react";
// import { Route, NavLink, withRouter, Redirect, Switch } from 'react-router-dom'
import Scroll from "react-scroll";
import Router from "next/router";
import logoSVG from "@images/logo.svg";

import StartPageHeader from "@src/components/NavBar";
import { useRouter } from "next/dist/client/router";

const GapLine = ({ color, activeColor, currentPath, pathname }) => {
	return (
		<svg
			width="71"
			height="6"
			viewBox="0 0 71 6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="order__numbers-container__numbers__gapline"
		>
			<rect
				x="1"
				y="2.5"
				width="70"
				height="1"
				rx="0.5"
				fill={pathname === currentPath ? activeColor : color}
			/>
			<circle cx="2.5" cy="3" r="2.5" fill={pathname === currentPath ? activeColor : color} />
			<circle cx="68.5" cy="3" r="2.5" fill={pathname === currentPath ? activeColor : color} />
		</svg>
	);
};
const Circle = ({ color, width, height }) => {
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
function PersonalDataLayout(props) {
	React.useEffect(() => {
		document.body.style.overflow = "scroll";

		const scrollToId = () => {
			Scroll.scroller.scrollTo("start_page", {
				duration: 0,
				delay: 0,
				smooth: false,
			});
		};
		scrollToId();
	}, []);
	const router = useRouter();
	return (
		<React.Fragment>
			{/* <StartPageHeader/> */}
			<div className="personal-data">
				<div className="personal-data__side">
					<p className="personal-data__side__logo">
						Сделано в <span>REJI</span>
					</p>
				</div>
				<div className="personal-data__container">
					<div className="personal-data__container__back-container">
						<button className="personal-data__buttons__prew" onClick={() => Router.back()}>
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
						</button>
					</div>

					<div className="personal-data__content">{props.children}</div>
				</div>
				<div className="personal-data__footer">
					<div className="personal-data__footer__wrapper">
						<div className="personal-data__footer__wrapper__logo">
							<img src={logoSVG} alt="logo_whiteSVG" />
						</div>
						<div className="personal-data__footer__wrapper__feedback">
							<div className="personal-data__footer__wrapper__feedback__phone">
								<span>8 800 800 - 80 - 80</span>
							</div>
							<div className="personal-data__footer__wrapper__feedback__mail">
								<span>info@ledvled.ru</span>
							</div>
							<div className="personal-data__footer__wrapper__feedback__adress">
								<span>ООО «Глобал» г. Омск, ул. Звездова 129</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default PersonalDataLayout;
