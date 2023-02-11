import { IReview } from '@/types/reviews.interface';

export interface IProduct {
	id: number;
	name: string;
	slug: string;
	description: string;
	price: number;
	/*TODO: Add review interface*/
	reviews: IReview[];
	images: string[];
}

export interface IProductDetails {
	product: IProduct;
}
