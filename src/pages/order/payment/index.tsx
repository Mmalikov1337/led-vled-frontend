import React from "react";
import Payment from "@components/Order/Payment";
import OrderLayout from "@src/layouts/orderLayout";
import StartPageHeader from "@src/components/NavBar";
import MainLayout from "@src/layouts/mainLayout";

export default function PaymentPage() {
	return (
		<MainLayout className="container">
			<OrderLayout>
				<Payment />
			</OrderLayout>
		 </MainLayout>
	);
}
