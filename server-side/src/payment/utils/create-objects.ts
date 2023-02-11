import { IPaymentRequest } from '../types/payment-request.interface';
import { IItemProduct } from '../types/receipt.interface';

const createPaymentObjects = (items?: IItemProduct[]) => {
	const paymentRequest: IPaymentRequest = {
		amount: {
			value: items
				.reduce(
					(acc, { quantity, amount: { value } }) => acc + +value * quantity,
					0
				)
				.toFixed(2),
			currency: 'RUB'
		},
		payment_method_data: {
			type: 'bank_card'
		},
		confirmation: {
			type: 'redirect',
			return_url: 'http://localhost:3000/thanks'
		},
		receipt: {
			type: 'payment',
			customer,
			items,
			tax_system_code: 3
		}
	};
	return paymentRequest;
};

const customer = {
	full_name: 'Иванов Иван Иванович',
	phone: '79000000000',
	email: 'artem_bsk@mail.ru'
};

const createReceiptObject = () => {};

export { createPaymentObjects, createReceiptObject };
