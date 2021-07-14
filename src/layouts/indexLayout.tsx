import React from "react";
import NavBar from "@src/components/NavBar";

interface IMainLayout {
	className?: string;
	childrenTop?: React.ReactNode;
	childrenBottom?: React.ReactNode;
	onWheel: any;
	bottomStyle: any;
}

export default function IndexLayout(props: IMainLayout) {
	return (
		<div className="app" onWheel={(e) => props.onWheel(e)}>
			<div className="app__container white" onTouchMove={(e) => console.log(e)} id = "start_page">
				<NavBar />
				{props.childrenTop}
			</div>
			<div className="app__container blue" style={props.bottomStyle}>
				{props.childrenBottom}
			</div>
		</div>
	);
}
