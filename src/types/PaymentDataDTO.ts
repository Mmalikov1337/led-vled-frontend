export default class PaymentDataDTO {
	method: string;

	constructor(
		method: string,
	) {
		this.method = method;
	}

    getPlainObject(){
        return {...this}
    }
}
