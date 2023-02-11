import {
	Body,
	Controller,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
	constructor(private readonly paymentService: PaymentService) {}

	@UsePipes(new ValidationPipe({ transform: true }))
	@HttpCode(200)
	@Post()
	async createPayment(@Body() dto: CreatePaymentDto) {
		return this.paymentService.payment(dto);
	}

	@HttpCode(200)
	@Post('status')
	async getPaymentStatus(@Body() dto: PaymentStatusDto) {
		return this.paymentService.paymentStatus(dto);
	}

	@HttpCode(200)
	@Post('test/:id')
	async test(@Body() dto: any, @Param('id') paymentId: string) {
		return this.paymentService.confirmPaymentStatus(paymentId);
	}
}
