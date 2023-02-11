type StatusPaymentType =
	| 'pending'
	| 'waiting_for_capture'
	| 'succeeded'
	| 'canceled';

type CardType =
	| 'MasterCard'
	| 'Visa'
	| 'Mir'
	| 'UnionPay'
	| 'JCB'
	| 'AmericanExpress'
	| 'DinersClub'
	| 'DiscoverCard'
	| 'InstaPayment'
	| 'InstaPaymentTM'
	| 'Laser'
	| 'Dankort'
	| 'Solo'
	| 'Switch'
	| 'Unknown';

export interface IPaymentObject {
	id: string;
	status: StatusPaymentType;
	amount: IAmount;

	income_amount?: IAmount;
	description?: string;
	recipient: IRecipient;
	payment_method?: IPaymentMethod;
	captured_at?: string;
	created_at: string;
	expires_at?: string;
	confirmation?: IConfirmation;
	refunded_amount?: IAmount;
	test: boolean;
	paid: boolean;
	refundable: boolean;
	receipt_registration?: 'pending' | 'succeeded' | 'canceled';
	metadata?: Object;
	cancellation_details?: ICanceledDetails;
	authorization_details?: IAuthorizationDetails;
	transfers?: ITransfers[];
	deal?: IDeal;
	merchant_customer_id?: string;
}

export interface IAmount {
	value: string;
	currency: string;
}

export interface IRecipient {
	account_id: string;
	gateway_id: string;
}

export interface IPaymentMethod {
	type: string;
	id: string;
	saved: boolean;
	title?: string;
	card?: ICardPaymentMethod;
}

export interface ICardPaymentMethod {
	first6?: string;
	last4: string;
	expiry_year: string;
	expiry_month: string;
	card_type: CardType;
}

export interface IConfirmation {
	type: string;
	confirmation_token: string;
}

export interface ICanceledDetails {
	party: string;
	reason: string;
}

export interface IAuthorizationDetails {
	rrn?: string;
	auth_code?: string;
	three_d_secure: {
		applied: boolean;
	};
}

export interface ITransfers {
	account_id: string;
	amount: IAmount;
	status: StatusPaymentType;
	platform_fee_amount?: IAmount;
	description?: string;
	metadata?: Object;
}

export interface ISettlement {
	type: string;
	amount: IAmount;
}

export interface IDeal {
	id: string;
	settlements: ISettlement[];
}
