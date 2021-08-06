import React from "react";
import { EventHandler } from "react";

interface IPrewButton {
	classes: Array<string>;
	text: string;
	onClick: EventHandler<any>;
}
export default function PrewButton(props: IPrewButton) {
	const className = props.classes.join(" ");
	return (
		<button className={className} onClick={props.onClick}>
			<div>
				<span>{props.text}</span>
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
	);
}
