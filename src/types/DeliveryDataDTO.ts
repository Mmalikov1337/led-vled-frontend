export default class DeliveryDataDTO {
	method: string;
	price?: number;
	constructor(method: string, price?: number) {
		this.method = method;
		if (price) this.price = price;
	}

	getPlainObject() {
		return { ...this };
	}
}
