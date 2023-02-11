import { Product } from '@prisma/client'

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Midnight Mint Mocha Frappuccino',
		images: [
			'/uploads/images/products/peppermint.png',
			'/uploads/images/products/sugar-cookie.png',
			'/uploads/images/products/mocha-cookie.png'
		]
	},
	{
		name: 'Peppermint Mocha Starbucks',
		images: ['/uploads/images/products/coffee-cup.png']
	},
	{
		name: 'Matcha Crème Frappuccino® Blended Beverage',
		images: ['/uploads/images/products/mocha-cookie.png']
	},
	{
		name: 'Irish Cream Cold Brew Starbucks',
		images: ['/uploads/images/products/ice-coffee.png']
	},
	{
		name: 'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
		images: ['/uploads/images/products/lemonade.png']
	}
]
