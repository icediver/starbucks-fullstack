import { IProduct } from '@/types/product.interface';
import { IReview } from '@/types/reviews.interface';

export const reviews: IReview[] = [
	{
		id: 1,
		product: {} as IProduct,
		rating: 4,
		text: 'Hello, world!'
	},
	{
		id: 2,
		product: {} as IProduct,
		rating: 2.5,
		text: 'Hello, world!'
	},
	{
		id: 3,
		product: {} as IProduct,
		rating: 3,
		text: 'Hello, world!'
	}
];
