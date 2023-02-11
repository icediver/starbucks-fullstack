import { products } from '@/data/product.data';
import { ICartItem } from '@/types/cart-item.interface';

export const cart: ICartItem[] = [
	{
		id: 1,
		quantity: 1,
		product: products[0],
		size: 'GRANDE'
	},
	{
		id: 2,
		quantity: 2,
		product: products[1],
		size: 'TALL'
	}
];
