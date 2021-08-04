export default class PaymentDataDTO {
	method: methodsAllowed;

	constructor(
		method: methodsAllowed,
	) {
		this.method = method;
	}

    getPlainObject(){
        return {...this}
    }
}
type methodsAllowed = "on_receiving" | "raif" | "sber"