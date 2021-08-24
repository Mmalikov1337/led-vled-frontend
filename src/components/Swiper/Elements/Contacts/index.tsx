import MapButton from "@src/components/Buttons/MapNuttom";
import NextButton from "@src/components/Buttons/NextButton";
import { catalogURL } from "@src/config";
import toPage from "@src/helpers/toPage";
import Link from "next/link";
import React from "react";

import mastercardPNG from "@images/mastercard53.png";
import visaPNG from "@images/visa_white.png";
import mirpng from "@images/mir.png";
// import { NavLink } from 'react-router-dom'

export default function Contacts({ onLoad }) {
	return (
		<div className="contacts" id="contacts">
			<div className="contacts__content">
				<div className="contacts__content__title">
					<h3>Контакты</h3>
				</div>
				<div className="contacts__content__bottom">
					<div className="contacts__content__bottom__buttons">
						{/* <NavLink to="/catalog"> */}

						<MapButton
							classes={["btn", "b-white", "btn-sm", "contacts__content__bottom__buttons_to_map"]}
							onClick={() => {
								toPage(catalogURL);
							}}
							text="На карте"
						/>

						<NextButton
							classes={[
								"btn",
								"b-yellow",
								"btn-sm",
								"contacts__content__bottom__buttons_to_catalog",
							]}
							onClick={() => {
								toPage(catalogURL);
							}}
							text="Каталог"
						/>
						{/* </NavLink> */}
					</div>
					<div className="contacts__content__bottom__contacts">
						<div className="contacts__content__bottom__contacts__item">
							<div>
								<svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.0526 7.90106C10.3124 7.90106 9.58738 7.78548 8.90021 7.55873C8.56484 7.44315 8.184 7.53221 7.96359 7.75706L6.60127 8.7859C5.03811 7.9516 4.03769 6.95179 3.21475 5.4L4.21579 4.0699C4.46779 3.8179 4.55812 3.44905 4.45012 3.10358C4.22148 2.412 4.10528 1.68632 4.10528 0.947369C4.10528 0.425043 3.68023 0 3.15791 0H0.947369C0.425043 0 0 0.425043 0 0.947369C0 7.04147 4.95853 12 11.0526 12C11.575 12 12 11.575 12 11.0526V8.84843C12 8.3261 11.575 7.90106 11.0526 7.90106Z"
										fill="white"
									/>
								</svg>
							</div>
							<p>8 800 854 - 12 - 34</p>
						</div>
						<div className="contacts__content__bottom__contacts__item">
							<div>
								<svg
									width="15"
									height="5"
									viewBox="0 0 15 5"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M9.69763 0.121475L9.05389 0.765215C8.19728 1.62183 6.80342 1.62183 5.94681 0.765215L5.3031 0.121475L0.753906 4.64137C0.925791 4.7236 1.11578 4.7735 1.31872 4.7735H13.682C13.8849 4.7735 14.0749 4.7236 14.2468 4.64137L9.69763 0.121475Z"
										fill="white"
									/>
								</svg>
							</div>
							<p>info@ledvled.ru</p>
						</div>
						<div className="contacts__content__bottom__contacts__item">
							<div>
								<svg
									width="12"
									height="14"
									viewBox="0 0 12 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M6 0C3.06 0 0.667969 2.39203 0.667969 5.33203C0.667969 6.49551 1.03547 7.60102 1.73164 8.52852L5.67133 13.8346C5.68117 13.8474 5.69621 13.8524 5.70715 13.8639C5.90402 14.0747 6.18813 14.0216 6.3284 13.8346C7.46289 12.3208 9.54238 9.49375 10.3419 8.42734C10.3419 8.42734 10.3422 8.42652 10.3425 8.42598L10.3474 8.41941C10.9916 7.51434 11.332 6.44684 11.332 5.33203C11.332 2.39203 8.94 0 6 0ZM6 8.20859C4.41707 8.20859 3.12344 6.91496 3.12344 5.33203C3.12344 3.7491 4.41707 2.45547 6 2.45547C7.58293 2.45547 8.87656 3.7491 8.87656 5.33203C8.87656 6.91496 7.58293 8.20859 6 8.20859Z"
										fill="white"
									/>
								</svg>
							</div>
							<p>г. Омск, ул. Звездова 129. ООО «Глобал»</p>
						</div>
						<div className="contacts__links_wrapper">
							<div
								className={`${
									onLoad
										? "contacts__content__bottom__contacts__policy contacts__content__bottom__contacts__policy--active"
										: "contacts__content__bottom__contacts__policy"
								}`}
							>
								<p>
									<Link href="/privacy-policy">
										<a className="link-reset">Политика в области обработки персональных данных</a>
									</Link>
								</p>
							</div>
							<div
								className={`${
									onLoad
										? "contacts__content__bottom__contacts__policy-ref contacts__content__bottom__contacts__policy--active"
										: "contacts__content__bottom__contacts__policy-ref "
								}`}
							>
								<p>
									<Link href="/refund-policy">
										<a className="link-reset">Политика в области возврата</a>
									</Link>
								</p>
							</div>

							<div
								className={`${
									onLoad
										? "contacts__content__bottom__contacts__policy-ref contacts__content__bottom__contacts__policy--active"
										: "contacts__content__bottom__contacts__policy-ref "
								}`}
							>
								<p>
									<Link href="/delivery-policy">
										<a className="link-reset">Условия доставки</a>
									</Link>
								</p>
							</div>
							<div
								className={`${
									onLoad
										? "contacts__content__bottom__contacts__policy-ref contacts__content__bottom__contacts__policy--active"
										: "contacts__content__bottom__contacts__policy-ref "
								}`}
							>
								<p>
									<Link href="/payment-policy">
										<a className="link-reset">Описание процесса оплаты</a>
									</Link>
								</p>
							</div>
							<div
								className={`${
									onLoad
										? "contacts__content__bottom__contacts__policy-ref contacts__content__bottom__contacts__policy--active"
										: "contacts__content__bottom__contacts__policy-ref "
								}`}
							>
								<p>
									<Link href="/requisites-policy">
										<a className="link-reset">Реквизиты юр.лица</a>
									</Link>
								</p>
							</div>
							<div className="logoHolder">
								<img className="pay_logo" src={mastercardPNG} alt="logo" />
								<img className="pay_logo" src={visaPNG} alt="logo" />
								<img className="pay_logo" src={mirpng} alt="logo" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
