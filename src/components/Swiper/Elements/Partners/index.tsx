import React from 'react'
import MaskedInput from 'react-text-mask'


export default function Partners({ onLoad }) {

	return (
		<div className="partners" id='partners'>
			<div className="partners__content">

				<div className="partners__title">
					<h3>
						Партнёрам
					</h3>
				</div>
				<div className="partners__form-wrapper">
					<div className="partners__form">
						<p className="partners__form__recall">
							Заполните форму – мы перезвоним сами,
							и расскажем об актуальных условиях поставок
						</p>
						<p className="partners__form__mail">
							Свои предложения отправляйте на <span>info@ledvled.ru</span>
						</p>
						<div className={`${onLoad ? "partners__form__input partners__form__input--active" : "partners__form__input"}`}>
							<div>
								<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0)">
										<path d="M6.99984 7.41351C8.73337 7.41351 10.1388 5.76857 10.1388 3.73945C10.1388 0.925623 8.73344 0.0654297 6.99984 0.0654297C5.26617 0.0654297 3.86084 0.925623 3.86084 3.73945C3.86087 5.76857 5.2662 7.41351 6.99984 7.41351Z" fill="white" />
										<path d="M13.9316 12.821L12.3479 9.25355C12.2755 9.0903 12.1482 8.95491 11.9899 8.87245L9.53211 7.59304C9.47791 7.56488 9.41229 7.57036 9.36357 7.60724C8.66843 8.13301 7.85111 8.41091 7.00005 8.41091C6.14886 8.41091 5.33161 8.13301 4.63647 7.60724C4.58761 7.57036 4.52199 7.56488 4.46779 7.59304L2.01022 8.87245C1.85176 8.95491 1.72465 9.09024 1.65214 9.25355L0.0684867 12.821C-0.0406969 13.067 -0.0183195 13.3484 0.128365 13.5739C0.274981 13.7995 0.523116 13.9341 0.792157 13.9341H13.2078C13.4769 13.9341 13.7251 13.7994 13.8717 13.5739C14.0183 13.3484 14.0408 13.0669 13.9316 12.821Z" fill="white" />
									</g>
									<defs>
										<clipPath id="clip0">
											<rect width="14" height="14" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</div>

							<input type="text" placeholder="Ваше имя" />
						</div>
						<div className={`${onLoad ? "partners__form__input partners__form__input--active" : "partners__form__input"}`}>
							<div>
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.0526 7.90106C10.3124 7.90106 9.58738 7.78548 8.90021 7.55873C8.56484 7.44315 8.184 7.53221 7.96359 7.75706L6.60127 8.7859C5.03811 7.9516 4.03769 6.95179 3.21475 5.4L4.21579 4.0699C4.46779 3.8179 4.55812 3.44905 4.45012 3.10358C4.22148 2.412 4.10528 1.68632 4.10528 0.947369C4.10528 0.425043 3.68023 0 3.15791 0H0.947369C0.425043 0 0 0.425043 0 0.947369C0 7.04147 4.95853 12 11.0526 12C11.575 12 12 11.575 12 11.0526V8.84843C12 8.3261 11.575 7.90106 11.0526 7.90106Z" fill="white" />
								</svg>
							</div>
							<MaskedInput
								mask={['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/, ' ', '-', ' ', /\d/, /\d/]}
								// className="form-control"
								placeholder="+7 (___) ___ - __ - __"
								guide={true}
							/>
							{/* <input type="text" placeholder="+7 (___) ___ - __ - __" value={inputValue} onChange={(e) => changeInputValue(e)} /> */}
						</div>
						<div className="partners__form__container">
							<div className="partners__form__container__button">
								<div>
									<span>Отправить</span>
									<div>
										<svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.66685 6.9147L1.99166 0.239632C1.83727 0.0851213 1.63118 0 1.41142 0C1.19167 0 0.985572 0.0851213 0.831183 0.239632L0.339602 0.731092C0.0197263 1.05133 0.0197263 1.57182 0.339602 1.89157L5.94492 7.49689L0.333382 13.1084C0.178993 13.2629 0.09375 13.4689 0.09375 13.6885C0.09375 13.9084 0.178993 14.1144 0.333382 14.269L0.824964 14.7604C0.979475 14.9149 1.18545 15 1.4052 15C1.62496 15 1.83105 14.9149 1.98544 14.7604L8.66685 8.0792C8.82161 7.9242 8.90661 7.71725 8.90612 7.49726C8.90661 7.2764 8.82161 7.06958 8.66685 6.9147Z" fill="white" />
										</svg>
									</div>
								</div>
							</div>
							<div className="partners__form__container__agree">
								Отправляя данные, я даю Согласие на их
								обработку, в т.ч. отправку информационных
								сообщений на указанный электронный адрес
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
