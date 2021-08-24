import React from "react";
import DeliveryPolicy from "@components/DeliveryPolicy";
import MainLayout from "@src/layouts/mainLayout";
import PolicyLayout from "@src/layouts/policyLayout";

export default function DeliveryPolicyPage() {
	return (
		<MainLayout className="container">
			<PolicyLayout>
				<DeliveryPolicy />
			</PolicyLayout>
		</MainLayout>
	);
}
