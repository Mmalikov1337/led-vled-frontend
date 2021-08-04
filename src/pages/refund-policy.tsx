import React from "react";
import Refund from "@components/Refund";
import MainLayout from "@src/layouts/mainLayout";
import PolicyLayout from "@src/layouts/policyLayout";

export default function PartnersPage() {
	return (
		<MainLayout className="container">
			<PolicyLayout>
				<Refund />
			</PolicyLayout>
		</MainLayout>
	);
}
