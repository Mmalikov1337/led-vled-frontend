import React from "react";
import { EventHandler } from "react";

interface IDownButton {
	classes: Array<string>;
	text: string;
	onClick: EventHandler<any>;
}
export default function DownButton(props: IDownButton) {
	const className = props.classes.join(" ");
	return (
		<button className={className} onClick={props.onClick}>
			<div>
				<span>{props.text}</span>
				<div>
					<svg
						width="15"
						height="9"
						viewBox="0 0 15 9"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.0853 8.66685L14.7604 1.99166C14.9149 1.83727 15 1.63118 15 1.41142C15 1.19167 14.9149 0.985572 14.7604 0.831183L14.2689 0.339602C13.9487 0.0197263 13.4282 0.0197263 13.1084 0.339602L7.50311 5.94492L1.89157 0.333382C1.73706 0.178993 1.53108 0.0937502 1.31145 0.0937502C1.09158 0.0937502 0.885602 0.178993 0.730968 0.333382L0.239632 0.824964C0.0851202 0.979475 1.30184e-08 1.18545 1.56389e-08 1.4052C1.82595e-08 1.62496 0.0851202 1.83105 0.239632 1.98544L6.9208 8.66685C7.0758 8.82161 7.28275 8.90661 7.50274 8.90612C7.7236 8.90661 7.93042 8.82161 8.0853 8.66685Z"
							fill="#008CE6"
						/>
					</svg>
				</div>
			</div>
		</button>
	);
}
