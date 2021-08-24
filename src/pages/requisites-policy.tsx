import React from "react";
import RequisitesPolicy from "@components/RequisitesPolicy";
import MainLayout from "@src/layouts/mainLayout";
import PolicyLayout from "@src/layouts/policyLayout";

export default function PartnersPage() {
	return (
		<MainLayout className="container">
			<PolicyLayout>
				<RequisitesPolicy />
			</PolicyLayout>
		</MainLayout>
	);
}
