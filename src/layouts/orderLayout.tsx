import Link from "next/link";
import React from "react";
// import { Route, NavLink, withRouter, Redirect, Switch } from 'react-router-dom'
import Scroll from "react-scroll";

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
			<circle
				cx="68.5"
				cy="3"
				r="2.5"
				fill={pathname === currentPath ? activeColor : color}
			/>
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
function OrderLayout(props) {
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
			<div className="order" ref={props.link}>
				<div className="order__side">
					<p className="order__side__logo">
						Сделано в <span>REJI</span>
					</p>
				</div>
				<div className="order__container">
					<div className="order__numbers-container">
						<div className="order__numbers-container__numbers">
							<Link href="/order/cart">
								<a>
									<div
										className={
											"order__numbers-container__numbers__number" +
											(router.pathname === "/order/cart" ? " active" : "")
										}
									>
										1
									</div>
								</a>
							</Link>

							<GapLine
								color="#008CE6"
								activeColor="#FF4E5A"
								currentPath="/order/cart"
								pathname={router.pathname}
							/>
							<Link href="/order/delivery">
								<a>
									<div
										className={
											"order__numbers-container__numbers__number" +
											(router.pathname === "/order/delivery" ? " active" : "")
										}
									>
										2
									</div>
								</a>
							</Link>

							<GapLine
								color="#008CE6"
								activeColor="#FF4E5A"
								currentPath="/order/delivery"
								pathname={router.pathname}
							/>
							<Link href="/order/payment">
								<a>
									<div
										className={
											"order__numbers-container__numbers__number" +
											(router.pathname === "/order/payment" ? " active" : "")
										}
									>
										3
									</div>
								</a>
							</Link>
						</div>
					</div>

					<div className="order__content">
						{props.children}
						{/* <Switch>
						<Route exact path="/order/cart" >
							<Cart tempItems={props.tempItems} ChangeQuantity={props.ChangeQuantity} />
						</Route>
						<Route exact path="/order/delivery" >
							<Delivery />
						</Route>
						<Route exact path="/order/payment" >
							<Payment />
						</Route>
						{/* <Route exact path="/order/delivery1" >
							<Cart tempItems={props.tempItems} ChangeQuantity={props.ChangeQuantity} />
						</Route> */}
						{/* <Redirect to="/order/cart" />
					</Switch> */}
					</div>
				</div>
				<div className="order__footer">
					<div className="order__footer__wrapper">
						<div className="order__footer__wrapper__logo">
							<img src={logoSVG} alt="logo_whiteSVG" />
						</div>
						<div className="order__footer__wrapper__feedback">
							<div className="order__footer__wrapper__feedback__phone">
								<span>8 800 800 - 80 - 80</span>
							</div>
							<div className="order__footer__wrapper__feedback__mail">
								<span>info@ledvled.ru</span>
							</div>
							<div className="order__footer__wrapper__feedback__adress">
								<span>ООО «Глобал» г. Омск, ул. Звездова 129</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default OrderLayout;
