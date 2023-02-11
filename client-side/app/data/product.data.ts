import { IProduct } from '@/types/product.interface';

import { reviews } from '@/data/review.data';

export const products: IProduct[] = [
	{
		id: 1,
		description:
			'Calories Total Fat 19g Saturated Fat 13g Trans Fat 0.5g 29% 65%',
		name: 'Midnight Mint Mocha Frappuccino',
		slug: 'midnight-mint-mocha-frappuccino',
		images: [
			'/images/products/peppermint.png',
			'/images/products/sugar-cookie.png',
			'/images/products/mocha-cookie.png'
		],
		price: 9,
		reviews: [reviews[0], reviews[1], reviews[2]]
	},
	{
		id: 2,
		description:
			'Calories Total Fat 20g Saturated Fat 13g Trans Fat 0.5g 24% 6124%',
		name: 'Peppermint Mocha Starbucks',
		slug: 'peppermint-mocha-starbucks',
		images: ['/images/products/coffee-cup.png'],
		price: 5,
		reviews: []
	},
	{
		id: 3,
		description:
			'Calories Total Fat 20g Saturated Fat 13g Trans Fat 0.5g 24% 6124%',
		name: 'Matcha Crème Frappuccino® Blended Beverage',
		slug: 'matcha-cr-me-frappuccino--blended-beverage',
		images: ['/images/products/mocha-cookie.png'],
		price: 7,
		reviews: []
	},
	{
		id: 4,
		description:
			'Calories Total Fat 20g Saturated Fat 13g Trans Fat 0.5g 24% 6124%',
		name: 'Irish Cream Cold Brew Starbucks',
		slug: 'irish-cream-cold-brew-starbucks',
		images: ['/images/products/ice-coffee.png'],
		price: 12,
		reviews: []
	},
	{
		id: 5,
		description:
			'Calories Total Fat 20g Saturated Fat 13g Trans Fat 0.5g 24% 6124%',
		name: 'Mango Dragonfruit Lemonade Starbucks Refreshers® Beverage',
		slug: 'mango-dragonfruit-lemonade-starbucks-refreshers-beverage',
		images: ['/images/products/lemonade.png'],
		price: 15,
		reviews: []
	}
];
