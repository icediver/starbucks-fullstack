import { Transform, Type } from 'class-transformer';
import {
	IsArray,
	IsNumber,
	IsOptional,
	IsString,
	Validate,
	ValidateNested
} from 'class-validator';
import {
	IMarkCodeInfo,
	IMarkQuantity,
	IPaymentSubjectIndustryDetails
} from '../types/receipt.interface';
import { IsNumberOrObject } from '../validators/amount.validator';

export class CreatePaymentDto {
	@ValidateNested({ each: true })
	@IsArray()
	@Type(() => ItemDto)
	items: ItemDto[];
}

export class AmountDto {
	@IsNumber()
	value: string;

	@IsOptional()
	@IsString()
	currency: string = 'RUB';
}

class ItemDto {
	@Validate(IsNumberOrObject)
	@Type(() => AmountDto)
	@Transform(({ value }) => {
		if (typeof value === 'object') return value;
		const amount = new AmountDto();
		amount.value = value;
		return amount;
	})
	amount: AmountDto;

	@IsNumber()
	quantity: number;

	@IsString()
	@IsOptional()
	description: string;

	@IsOptional()
	@IsString()
	measure?: string = 'piece';
	@IsOptional()
	mark_quantity?: IMarkQuantity;

	@IsOptional()
	@IsString()
	payment_subject?: string = 'commodity';

	@IsOptional()
	@IsString()
	payment_mode?: string = 'full_prepayment';

	@IsOptional()
	@IsString()
	country_of_origin_code?: string = 'RU';
	@IsOptional()
	@IsString()
	custom_declaration_number?: string;
	@IsOptional()
	@IsString()
	excise?: string;

	@IsOptional()
	@IsString()
	product_code?: string;

	@IsOptional()
	mark_code_info?: IMarkCodeInfo;

	@IsOptional()
	@IsString()
	mark_mode?: string;

	@IsOptional()
	payment_subject_industry_details?: IPaymentSubjectIndustryDetails[];

	@IsOptional()
	@IsNumber()
	vat_code: number = 3;
}
