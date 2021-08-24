import React from "react";
import PaymentPolicy from "@components/PaymentPolicy";
import MainLayout from "@src/layouts/mainLayout";
import PolicyLayout from "@src/layouts/policyLayout";

export default function PaymentPolicyPage() {
	return (
		<MainLayout className="container">
			<PolicyLayout>
				<PaymentPolicy />
			</PolicyLayout>
		</MainLayout>
	);
}
