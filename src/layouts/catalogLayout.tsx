import React from "react";
import StartPageHeader from "@src/components/NavBar";

interface ICatalogLayout {
	className?: string;
	id?: string;
	onWheel?: (Event) => Promise<void>;
	children?: React.ReactNode;
}

export default function CatalogLayout(props: ICatalogLayout) {
	return (
		<main className={props.className} onWheel={props.onWheel} id = {props.id}>
			<StartPageHeader />
			{props.children}
		</main>
	);
}
