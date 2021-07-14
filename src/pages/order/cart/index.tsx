import React from "react";
import Cart from "@components/Order/Cart";
import OrderLayout from "@src/layouts/orderLayout";
import StartPageHeader from "@src/components/NavBar";
import MainLayout from "@src/layouts/mainLayout";

export default function CartPage() {
	return (
		<MainLayout className="container">
			<OrderLayout>
				<Cart />
			</OrderLayout>
		 </MainLayout>
	);
}
