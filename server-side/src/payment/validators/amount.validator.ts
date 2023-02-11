import {
	ValidationArguments,
	ValidatorConstraint,
	ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint({ name: 'string-or-number', async: false })
export class IsNumberOrObject implements ValidatorConstraintInterface {
	validate(value: any, args: ValidationArguments) {
		return (
			typeof +value.value === 'number' && typeof value.currency === 'string'
		);
	}

	defaultMessage(args: ValidationArguments) {
		return '($value.value) must be number';
	}
}
