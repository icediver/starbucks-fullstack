import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { path } from 'app-root-path';
import { PaymentModule } from './payment/payment.module';

import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		}),
		ProductModule,
		ReviewModule,
		PaymentModule
	]
})
export class AppModule {}
