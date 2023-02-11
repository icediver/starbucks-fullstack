import { Controller, Get, Param } from '@nestjs/common';
import { ReviewService } from './review.service';

@Controller('reviews')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Get()
	findAll() {
		return this.reviewService.findAll();
	}

	@Get(':id')
	findById(@Param('id') id: string) {
		return this.reviewService.findById(+id);
	}
}
