import Link from "next/link";
import React from "react";

export default function DeliveryPolicy() {
	return (
		<div className="policy_content">
			<div className="policy_content__container">
				<div className="policy_content__title">
					<h3>Условия доставки</h3>
				</div>
				<section className="policy_content__section">
					<p>
						Доставка производится на 1-2й день с момента зачисления денег на наш счет. Товар
						доставляется в рабочие дни с 10-00 до 18-00. При получении товара у представителя
						юридического лица должна быть доверенность с печатью от компанииплательщика или сама
						печать.
					</p>
				</section>
			</div>
		</div>
	);
}
