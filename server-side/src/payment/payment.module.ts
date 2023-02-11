import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: ['.env.local', '.env.development'],
		}),
		HttpModule.register({
			baseURL: 'https://api.yookassa.ru/v3/payments/',
			headers: {
				'Content-type': 'application/json'
			},
			auth: {
				username: process.env.SHOP_ID,
				password: process.env.PAYMENT_TOKEN
			},
			responseType: 'json'
		})
	],
	controllers: [PaymentController],
	providers: [PaymentService]
})
export class PaymentModule {}
