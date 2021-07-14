import LocalStorageHepler from "@src/helpers/localStorageHelper";
import React from "react";
import Circle from "../Circle";

export default function CartItem(
	tempItems,
	ls: LocalStorageHepler,
	renderItemsQuantity = false,
	title,
	price,
	image,
	color,
	sideColor,
	index,
	picStyles = {}
) {
	let currentProductQuantity = ls.getSelectedProducts()[index];
	// console.log(ls.getSelectedProducts[index], currentProductQuantity);

	const increase = () => ls.increaseProductsQuantity(index);

	const decrease = () => {
		if (currentProductQuantity > 1) ls.decreaseProductsQuantity(index);
	};

	return (
		<div className="cart__orders__box">
			<div className="cart__orders__box__wrapper">
				<div className="cart__orders__box__image">
					<div className="cart__orders__box__image__wrapper">
						<Circle color={color} width="175" height="175" />
						<img src={image} alt="product image" style={picStyles} />
					</div>
				</div>
				<div className="cart__orders__box__text">
					<h3>{title}</h3>
					{renderItemsQuantity &&
						tempItems.map((i, index) => (
							<p key={index}>
								<span>{i.title}</span>
								<span>{ls.getSelectedProducts[index]} шт</span>
							</p>
						))}
				</div>
			</div>

			<div className="cart__orders__box__counter">
				<div className="cart__orders__box__counter__border">
					<button className="cart__orders__box__counter__border__button" onClick={decrease}>
						<svg
							width="8"
							height="4"
							viewBox="0 0 8 4"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M5.952 0.952H2.28C1.488 0.952 0.912 1.528 0.912 2.296C0.912 3.064 1.488 3.664 2.28 3.664H5.952C6.744 3.664 7.32 3.064 7.32 2.296C7.32 1.528 6.744 0.952 5.952 0.952Z"
								fill="#717171"
							/>
						</svg>
					</button>
					<div className="cart__orders__box__counter__border__quantity">
						{currentProductQuantity}
					</div>
					<button className="cart__orders__box__counter__border__button" onClick={increase}>
						<svg
							width="13"
							height="13"
							viewBox="0 0 13 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.744 12.152C7.632 12.152 8.304 11.48 8.304 10.568V7.808H11.184C12.12 7.808 12.648 7.112 12.648 6.344C12.648 5.552 12.12 4.88 11.184 4.88H8.304V2.096C8.304 1.208 7.632 0.535999 6.744 0.535999C5.856 0.535999 5.208 1.208 5.208 2.096V4.88H2.28C1.32 4.88 0.792 5.552 0.792 6.344C0.792 7.112 1.32 7.808 2.28 7.808H5.208V10.568C5.208 11.48 5.856 12.152 6.744 12.152Z"
								fill="#008CE6"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="cart__orders__box__price">{~~price * currentProductQuantity}₽</div>
			<button
				className="cart__orders__box__delete"
				onClick={() => ls.setSelectedProductByIndex(index, 0)}
			>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.46196 8.82392C10.0899 8.19601 10.0899 7.24566 9.44499 6.60078L7.49338 4.64916L9.52985 2.6127C10.1917 1.95084 10.0729 1.08535 9.52985 0.542288C8.96982 -0.017741 8.12129 -0.119564 7.45944 0.542287L5.42297 2.57876L3.45439 0.61017C2.82647 -0.0177415 1.87612 -0.0177415 1.24821 0.610169C0.620301 1.23808 0.637272 2.17146 1.26518 2.79937L3.23377 4.76796L1.16336 6.83837C0.484537 7.51719 0.58636 8.36572 1.14639 8.92575C1.68945 9.4688 2.55495 9.5876 3.23377 8.90878L5.30418 6.83837L7.25579 8.78998C7.90067 9.43486 8.83405 9.45183 9.46196 8.82392Z"
						fill="#FF4E5A"
					/>
				</svg>
			</button>
		</div>
	
	);
}