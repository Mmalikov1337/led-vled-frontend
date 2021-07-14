import React from "react";
import ProductList from "@src/components/Catalog/ProductList";
import MainLayout from "@src/layouts/mainLayout";
import ProductSlider from "@src/components/Catalog/ProductSlider";
import Scroll from "react-scroll";
import CatalogLayout from "@src/layouts/catalogLayout";
import timeout from "@src/helpers/timeout";

const links = [
	{
		id: "catalog__slider",
		style: {},
	},
	{
		id: "catalog__ProductList",
		style: {},
	},
];

export default function CatalogPage() {
	const [currentPage, setCurrentPages] = React.useState(0);
	const [swiperPause, setSwiperPause] = React.useState(false);

	React.useEffect(() => {
		const scrollToId = (indexScroll) => {
			Scroll.scroller.scrollTo(links[indexScroll].id, {
				duration: 600,
				delay: 0,
				smooth: true,
				ignoreCancelEvents: true,
			});
		};
		scrollToId(currentPage);
	}, [currentPage, links]);

	function scrollByWheel(value: WheelEvent) {
		if (value.deltaY < 0) {
			//вверх
			if (currentPage > 0) {
				//не первая страница
				setCurrentPages(currentPage - 1);
				return;
			} else {
				return;
			}
		}
		if (value.deltaY > 0) {
			//вниз 1                   1
			if (currentPage < links.length - 1) {
				//не последняя страница
				setCurrentPages(currentPage + 1);
				return;
			} else {
				return;
			}
		}
		return;
	}
	
	return (
		<CatalogLayout
			className="container"
			onWheel={async (e: WheelEvent) => {
				if (swiperPause) return;
				if (!swiperPause) {
					setSwiperPause(true);
					scrollByWheel(e);
					await timeout(1000);
					setSwiperPause(false);
				}
			}}
			id={links[0].id}
		>
			<ProductSlider currentPage={currentPage} />
			<ProductList id={links[1].id} />
		</CatalogLayout>
	);
}
