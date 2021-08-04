import React from "react";
import OrderLayout from "@src/layouts/orderLayout";
import MainLayout from "@src/layouts/mainLayout";
import Raif from "@src/components/Order/Payment/Raif";

export default function RaifPaymentPage() {
	return (
		<MainLayout className="container">
			<OrderLayout>
				<Raif />
			</OrderLayout>
		 </MainLayout>
	);
}
