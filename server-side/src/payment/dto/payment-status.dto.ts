import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

type EventStatusType =
	| 'payment.succeeded'
	| 'payment.waiting_for_capture'
	| 'payment.canceled'
	| 'refund.succeeded';

class AmountPayment {
	value: string;
	currency: string;
}

class RecipientPayment {
	account_id: string;
	gateway_id: string;
}

class ObjectPayment {
	id: string;
	url: string;

	status: string;
	amount: AmountPayment;
	recipient: RecipientPayment;
	payment_method: {
		type: string;
		id: string;
		saved: boolean;
		title: string;
		card: object;
	};
	created_at: string;
	expires_at: string;
}

export class PaymentStatusDto {
	@IsString()
	event: EventStatusType;
	@IsString()
	type: string;
	@Type(() => ObjectPayment)
	object: ObjectPayment;
}
