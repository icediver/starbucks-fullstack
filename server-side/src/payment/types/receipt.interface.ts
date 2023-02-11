import { IAmount } from './payment-object.interface';

export interface IReceiptPaymentRequest {
	type: string;
	customer: ICustomer;
	items: IItemProduct[];
	phone?: string;
	email?: string;
	tax_system_code?: number;
	receipt_industry_details?: IPaymentSubjectIndustryDetails;
	receipt_operation_details?: IReceiptOperationDetails;
}

export interface IReceiptOperationDetails {
	operation_id: string;
	value: string;
	created_at: string;
}

export interface ICustomer {
	full_name?: string;
	inn?: string;
	email: string;
	phone: string;
}

export interface IItemProduct {
	description: string;
	amount: IAmount;
	vat_code: number;
	quantity: number;
	measure?: string;
	mark_quantity?: IMarkQuantity;
	payment_subject?: string;
	payment_mode?: string;
	country_of_origin_code?: string;
	custom_declaration_number?: string;
	excise?: string;
	product_code?: string;
	mark_code_info?: IMarkCodeInfo;
	mark_mode?: string;
	payment_subject_industry_details?: IPaymentSubjectIndustryDetails[];
}

export interface IMarkQuantity {
	numerator: number;
	denominator: number;
}

export interface IMarkCodeInfo {
	mark_code_raw?: string;
	unknown?: string;
	ean_8?: string;
	ean_13?: string;
	itf_14?: string;
	gs_10?: string;
	gs_1m?: string;
	short?: string;
	fur?: string;
	egais_20?: string;
	egais_30?: string;
}

export interface IPaymentSubjectIndustryDetails {
	federal_id: string;
	document_date: string;
	document_number: string;
	value: string;
}
