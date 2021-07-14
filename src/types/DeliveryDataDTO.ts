export default class DeliveryDataDTO {
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
