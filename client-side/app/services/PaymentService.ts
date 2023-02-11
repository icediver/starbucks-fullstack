import { IPaymentResponse } from '@/types/payment.interface';

import { axiosClassic } from '@/api/api';

const PAYMENT = 'payment';

export interface IPaymentItem {
	description: string;
	quantity: number;
	amount: number;
}

export const PaymentService = {
	async createPayment(amount: IPaymentItem[]) {
		const { data } = await axiosClassic.post<IPaymentResponse>(PAYMENT, {
			items: [...amount]
		});
		return data;
	}
};
