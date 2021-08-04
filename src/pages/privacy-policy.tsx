import React from "react";
import PersonalData from "@components/PersonalData";
import MainLayout from "@src/layouts/mainLayout";
import PolicyLayout from "@src/layouts/policyLayout";

export default function PartnersPage() {
	return (
		<MainLayout className="container">
			<PolicyLayout>
				<PersonalData />
			</PolicyLayout>
		</MainLayout>
	);
}
