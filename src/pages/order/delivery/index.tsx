import React from "react";
import Delivery from "@components/Order/Delivery";
import OrderLayout from "@src/layouts/orderLayout";
import StartPageHeader from "@src/components/NavBar";
import MainLayout from "@src/layouts/mainLayout";

export default function DeliveryPage() {
	return (
		<MainLayout className="container">
			<OrderLayout>
				<Delivery />
			</OrderLayout>
		 </MainLayout>
	);
}
