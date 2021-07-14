import React from "react";
// import { NavLink } from 'react-router-dom'
import Link from "next/link";
import { useRouter } from "next/router";

import logoSVG from "@images/logo.svg";
import phoneSVG from "@images/phone.svg";
import cartSVG from "@images/cart.svg";
import LocalStorageHepler from "@src/helpers/localStorageHelper";

interface IStartPageHeader {
	extraClass?: string;
}

export default function StartPageHeader(props: IStartPageHeader) {
	const [productQuantity, setProductQuantity] = React.useState<number>(0);

	// const [isLoaded, setIsLoaded] = React.useState(false);

	// let ls: LocalStorageHepler = isLoaded ? new LocalStorageHepler(setProductQuantity) : null;

	// React.useEffect(() => {
	// 	setIsLoaded(true);
	// }, []);

	// React.useEffect(() => {
	// 	// if (isLoaded) {
	// 	// 	ls.setProductQuantity();
	// 	// }
	// }, [isLoaded]);

	// if (!isLoaded) {
	// 	return <h1>LOADING</h1>;
	// }

	const router = useRouter();
	return (
		<div className={"sp-header" + " " + props.extraClass ?? ""}>
			<div className="sp-header__logo">
				<img src={logoSVG} alt="logoSVG" />
			</div>
			<div className="sp-header__links">
				<ul>
					<li className="sp-header__links__link">
						<Link href="/">
							<a className={router.pathname === "/" ? "active" : ""}>Состав</a>
						</Link>
					</li>
					<li className="sp-header__links__link">
						<Link href="/catalog">
							<a className={router.pathname === "/catalog" ? "active" : ""}>Каталог</a>
						</Link>
					</li>
					<li className="sp-header__links__link">
						<Link href="/partners">
							<a className={router.pathname === "/partners" ? "active" : ""}>Партнёрам</a>
						</Link>
					</li>
					<li className="sp-header__links__link">
						<Link href="/contacts">
							<a className={router.pathname === "/contacts" ? "active" : ""}>Контакты</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="sp-header__buttons">
				<div className="sp-header__buttons__phone">
					<div>
						<img src={phoneSVG} alt="phoneSVG" />
					</div>
					<span>
						8 800 <span>854 - 12 - 34</span>
					</span>
				</div>
				<div className="sp-header__buttons__cart">
					{/* <NavLink to="/order/cart"> */}
					<Link href="/order/cart">
						<a>
							<div className="sp-header__buttons__cart__button">
								<img src={cartSVG} alt="cartSVG" />
							</div>
							{productQuantity > 0 ? (
								<div className="circle">
									<div>
										<span>{productQuantity}</span>
									</div>
								</div>
							) : (
								""
							)}
						</a>
					</Link>

					{/* </NavLink> */}
				</div>
			</div>
		</div>
	);
}
