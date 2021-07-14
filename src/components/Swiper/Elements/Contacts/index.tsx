import Link from "next/link";
import React from "react";
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
						<div className="contacts__content__bottom__buttons_to_catalog">
							<div>
								<span>На карте</span>
								<div>
									<svg
										width="13"
										height="15"
										viewBox="0 0 13 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6.5 0C3.35 0 0.787109 2.56289 0.787109 5.71289C0.787109 6.95947 1.18086 8.14394 1.92676 9.1377L6.14785 14.8228C6.1584 14.8366 6.17451 14.8418 6.18623 14.8541C6.39717 15.08 6.70156 15.0232 6.85186 14.8228C8.06738 13.2009 10.2954 10.1719 11.1521 9.0293C11.1521 9.0293 11.1523 9.02842 11.1526 9.02783L11.1579 9.0208C11.8481 8.05107 12.2129 6.90732 12.2129 5.71289C12.2129 2.56289 9.65 0 6.5 0ZM6.5 8.79492C4.804 8.79492 3.41797 7.40889 3.41797 5.71289C3.41797 4.01689 4.804 2.63086 6.5 2.63086C8.196 2.63086 9.58203 4.01689 9.58203 5.71289C9.58203 7.40889 8.196 8.79492 6.5 8.79492Z"
											fill="#008CE6"
										/>
									</svg>
								</div>
							</div>
						</div>
						{/* <NavLink to="/catalog"> */}
						<div className="contacts__content__bottom__buttons_to_map">
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
						<div
							className={`${
								onLoad
									? "contacts__content__bottom__contacts__policy contacts__content__bottom__contacts__policy--active"
									: "contacts__content__bottom__contacts__policy"
							}`}
						>
							<p>
								<Link href="/policy">
									<a>Политика в обработки персональных данных</a>
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
