import { IProduct } from '@/types/product.interface';

export interface ICarouselItem {
	product: IProduct;
	index: number;
}

export interface ICarouselNavigation extends Omit<ICarouselItem, 'index'> {
	isActive: boolean;
	onSelectSlide: () => void;
}
