export default class OrderDataDTO {
	name: string;
	email: string;
	tel: string;
	cityAddress: string;
	houseNumber: string;
	houseOrApartment: boolean;//'house' (true) or 'apartment' (false) : Boolean
	postIndex: string;
	promo: string | null;
	instagram: string | null;
	comment: string | null;

	constructor(
		name: string,
		email: string,
		phone: string,
		city: string,
		homeAdress: string,
		houseOrApartment: boolean,
		postIndex: string,
		promocode: string | null,
		instagram: string | null,
		comment: string | null
	) {
		this.name = name;
		this.email = email;
		this.tel = phone;
		this.cityAddress = city;
		this.houseNumber = homeAdress;
		this.houseOrApartment = houseOrApartment;
		this.postIndex = postIndex;
		this.promo = promocode;
		this.instagram = instagram;
		this.comment = comment;
	}

    getPlainObject(){
        return {...this}
    }
}
