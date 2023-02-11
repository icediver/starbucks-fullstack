import { IAmount, IDeal, IRecipient } from './payment-object.interface';
import { IReceiptPaymentRequest } from './receipt.interface';

export interface IPaymentRequest {
	amount: IAmount;
	description?: string;
	receipt: IReceiptPaymentRequest;
	recipient?: IRecipientPaymentRequest;
	payment_token?: string;
	payment_method_id?: string;
	payment_method_data?: IPaymentMethodData;
	confirmation?: IConfirmationPR;
	save_payment_method?: boolean;
	capture?: boolean;
	client_ip?: string;
	metadata?: Object;
	airline?: IAirline;
	transfers?: ITransfers[];
	deal?: IDeal;
	fraud_data?: IFraudData;
	merchant_customer_id?: string;
}

export interface IFraudData {
	topped_up_phone?: string;
}

export interface IAirline {
	ticket_number?: string;
	booking_reference?: string;
	passengers?: IPassenger[];
	legs?: ILegs[];
}

export interface IPassenger {
	first_name: string;
	last_name: string;
}

export interface ILegs {
	departure_airport: string;
	destination_airport: string;
	departure_data: string;
	carrier_code?: string;
}

export interface IConfirmationPR {
	type: string;
	enforce?: boolean;
	locale?: string;
	return_url: string;
}

export interface IRecipientPaymentRequest
	extends Omit<IRecipient, 'account_id'> {}

export interface ICard {
	number: string;
	expiry_year: string;
	expire_month: string;
	csc?: string;
	cardholder?: string;
}

export interface IPaymentMethodData {
	type: string;
	card?: ICard;
}

export interface ITransfers {
	account_id: string;
	amount: IAmount;
	platform_fee_amount?: IAmount;
	description?: string;
	metadata: Object;
}
