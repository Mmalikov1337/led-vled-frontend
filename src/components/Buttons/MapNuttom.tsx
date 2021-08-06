import React from "react";
import { EventHandler } from "react";

interface IMapButton {
	classes: Array<string>;
	text: string;
	onClick: EventHandler<any>;
}
export default function MapButton(props: IMapButton) {
	const className = props.classes.join(" ");
	return (
		<button className={className} onClick={props.onClick}>
			<div>
				<span>{props.text}</span>
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
		</button>
	);
}
