import React from "react";
import NotFound from "@components/Errors/NotFound";

export default function NotFoundPage() {
	// newCurrentPage={0} newSwiperPage={0}

	return (
		<>
			<div className="app">
				<div className="app__container error">
					<NotFound />
				</div>
			</div>
		</>
	);
}
