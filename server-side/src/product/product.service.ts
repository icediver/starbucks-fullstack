import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ReviewService } from '../review/review.service';
import { SortType } from './sort.type';

@Injectable()
export class ProductService {
	constructor(
		private prisma: PrismaService,
		private reviewService: ReviewService
	) {}

	async bySearchTerm(searchTerm?: string) {
		return await this.prisma.product.findMany(
			searchTerm
				? {
						where: {
							OR: [
								{
									name: {
										contains: searchTerm
									}
								},
								{
									description: {
										contains: searchTerm
									}
								}
							]
						}
				  }
				: undefined
		);
	}

	async findAll(type?: SortType) {
		const isByPrice = type === 'high-to-low' || type === 'low-to-high';
		const isDesc = type === 'newest' || type === 'high-to-low';

		const orderBy = {
			[isByPrice ? 'price' : 'createdAt']: isDesc ? 'desc' : 'asc'
		};

		return await this.prisma.product.findMany({ orderBy });
	}

	async findById(id: number) {
		const product = await this.prisma.product.findUnique({
			where: {
				id
			},
			include: {
				reviews: true
			}
		});

		if (!product) throw new NotFoundException('Product not found');

		const avgRating = await this.reviewService.getAverageRatingByProductId(id);

		return { ...product, ...avgRating };
	}

	async findBySlug(slug: string) {
		const product = await this.prisma.product.findUnique({
			where: {
				slug
			}
		});
		if (!product) throw new NotFoundException('Product not found');
		return product;
	}

	findRelatives(currentProductId: number) {
		return this.prisma.product.findMany({
			where: {
				id: {
					not: currentProductId
				}
			}
		});
	}
}
