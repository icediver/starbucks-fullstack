import { FC, useState } from 'react';

import AddToCartButton from '@/ui/catalog/carousel/carousel-item/AddToCartButton';
import SizeVariations from '@/ui/catalog/carousel/carousel-item/SizeVariations';

import { TypeSize } from '@/store/cart/cart.types';

import { IProductDetails } from '@/types/product.interface';

import styles from '../ProductCard.module.scss';

import ProductRating from '@/screens/product-details/product-card/product-variations/ProductRating';

const ProductVariations: FC<IProductDetails> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');
	return (
		<div className={styles.variations}>
			<ProductRating product={product} />
			<SizeVariations
				productId={product.id}
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
				variant={'medium'}
			/>
			<AddToCartButton
				product={product}
				selectedSize={selectedSize}
				variant={'medium'}
			/>
		</div>
	);
};

export default ProductVariations;
