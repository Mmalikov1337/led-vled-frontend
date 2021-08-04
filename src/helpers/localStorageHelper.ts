import DeliveryDataDTO from "@src/types/DeliveryDataDTO";
import OrderDataDTO from "@src/types/OrderDataDTO";
import PaymentDataDTO from "@src/types/PaymentDataDTO";
import React from "react";
import { productStorageName, productsQuantity, tempItems, tempDeliveryData } from "./../config";

class LocalStorageHepler {
	stateFunction: React.Dispatch<React.SetStateAction<number[] | number>> | null;

	constructor(stateFunction: React.Dispatch<React.SetStateAction<number[] | number>> | null) {
		this.stateFunction = stateFunction;
	}

	static getFromStorage(key) {
		return window.localStorage.getItem(key);
	}

	static setToStorage(key, value) {
		window.localStorage.setItem(key, value);
	}

	getSelectedProducts(): number[] {
		let selectedProducts = LocalStorageHepler.getFromStorage(productStorageName);
		if (!selectedProducts) {
			selectedProducts = JSON.stringify([...Array(5)].fill(0));
		}
		return JSON.parse(selectedProducts);
	}

	setSelectedProducts(value: number[] = null) {
		//меняет стейт
		if (!this.stateFunction) return;
		if (!value) {
			this.stateFunction(this.getSelectedProducts());
			return;
		}
		const stringifyed = JSON.stringify(value);
		LocalStorageHepler.setToStorage(productStorageName, stringifyed);
		this.stateFunction(value);
	}

	setSelectedProductByIndex(index: number, value: number) {
		//меняет стейт
		if (!this.stateFunction) return;

		const temp = this.getSelectedProducts();
		temp[index] = value;
		this.stateFunction(temp);
		this.setSelectedProducts(temp);
	}
	increaseProductsQuantity(index: number, summand: number = 1) {
		//меняет стейт
		const selectedProducts = this.getSelectedProducts();
		selectedProducts[index] += summand;
		this.setSelectedProducts(selectedProducts);
	}

	decreaseProductsQuantity(index: number, min: number = 0) {
		//меняет стейт
		if (!this.stateFunction) return;

		const selectedProducts = this.getSelectedProducts();

		if (selectedProducts[index] > min) {
			selectedProducts[index]--;
		}
		this.stateFunction(selectedProducts);
		this.setSelectedProducts(selectedProducts);
	}

	static getInitialState() {
		return React.useState([...Array(5)].fill(0));
	}
	/* NAVBAR */
	setProductQuantity() {
		this.stateFunction(this.getProductQuantity());
	}
	getProductQuantity() {
		const products = this.getSelectedProducts();
		const selected = products.filter((it) => it > 1);
		return selected.length;
	}
	/* ORDER */
	setOrderData(orderData: OrderDataDTO | null) {
		if (!orderData) return;
		const stringifyed = JSON.stringify(orderData);
		LocalStorageHepler.setToStorage("orderData", stringifyed);
	}

	getOrderData(): OrderDataDTO | null {
		const stringifyed = LocalStorageHepler.getFromStorage("orderData");
		if (!stringifyed) {
			return null;
		}
		return JSON.parse(stringifyed) as OrderDataDTO;
	}

	/*DELIVERY */
	setDeliveryData(deliveryData: DeliveryDataDTO | null) {
		if (!deliveryData) return;
		const stringifyed = JSON.stringify(deliveryData);
		LocalStorageHepler.setToStorage("deliveryData", stringifyed);
	}

	getDeliveryData(): DeliveryDataDTO | null {
		const stringifyed = LocalStorageHepler.getFromStorage("deliveryData");
		if (!stringifyed) {
			return null;
		}
		return JSON.parse(stringifyed) as DeliveryDataDTO;
	}

	/*PAYMENT */
	setPaymentData(paymentData: PaymentDataDTO) {
		if (!paymentData) return;
		const stringifyed = JSON.stringify(paymentData);
		LocalStorageHepler.setToStorage("paymentData", stringifyed);
	}

	getPaymentData(): PaymentDataDTO | null {
		const stringifyed = LocalStorageHepler.getFromStorage("paymentData");
		if (!stringifyed) {
			return null;
		}
		return JSON.parse(stringifyed) as PaymentDataDTO;
	}
	/*RAIF */

	countTotalPrice(): number | null {
		const selectedProducts = JSON.parse(
			LocalStorageHepler.getFromStorage("selectedProducts")
		) as Array<number>;
		const deliveryData = JSON.parse(
			LocalStorageHepler.getFromStorage("deliveryData")
		) as DeliveryDataDTO;
		const deliveryCost = tempDeliveryData.find((it) => it.method == deliveryData.method);

		if (!selectedProducts || !deliveryData) {
			return null;
		}
		if (!deliveryCost) {
			console.log("Wrong delivery method LS countTotalPrice");
			return null;
		}
		if (!deliveryCost.price) {
			console.log("Wrong deliveryCost.price LS countTotalPrice");
			return null;
		}
		const productSum = selectedProducts.reduce((acc, i, index) => {
			acc += Number(tempItems[index].price);
			return acc;
		}, 0);
		const final = productSum + deliveryCost.price;
		this.stateFunction(final)
		return final;
	}
}

export default LocalStorageHepler;
