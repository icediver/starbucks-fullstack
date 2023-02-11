import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { catchError, map, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';
import { IPaymentRequest } from './types/payment-request.interface';
import { createPaymentObjects } from './utils/create-objects';

@Injectable()
export class PaymentService {
	constructor(private readonly httpService: HttpService) {}

	payment({ items }: CreatePaymentDto): Observable<AxiosResponse> {
		const paymentRequest: IPaymentRequest = createPaymentObjects(items);
		return this.createRequest(paymentRequest);
	}

	paymentStatus(dto: PaymentStatusDto) {
		if (dto.event !== 'payment.waiting_for_capture') return;

		return this.createRequest({} as IPaymentRequest, dto.object.id);
	}

	confirmPaymentStatus(paymentId: string): Observable<any> {
		// const data = createPaymentObjects();

		return this.createRequest({} as IPaymentRequest, paymentId);
	}

	private createRequest(data: IPaymentRequest, paymentId?: string) {
		const url = paymentId ? `/${paymentId}/capture` : '/';

		const payment = this.httpService
			.post(url, data, {
				headers: { 'Idempotence-Key': uuidv4() }
			})
			.pipe(map(res => res.data))
			.pipe(
				catchError((error: AxiosError) => {
					console.log(error.response.data);
					throw 'Something is wrong!';
				})
			);
		return payment;
	}
}
