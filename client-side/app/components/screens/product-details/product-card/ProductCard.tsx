import { FC, useState } from 'react';

import { IProductDetails } from '@/types/product.interface';

import styles from './ProductCard.module.scss';
import ProductImage from '@/screens/product-details/product-card/product-image/ProductImage';
import ProductInformation from '@/screens/product-details/product-card/product-information/ProductInformation';
import ProductVariations from '@/screens/product-details/product-card/product-variations/ProductVariations';

const ProductCard: FC<IProductDetails> = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	return (
		<div className={styles.card}>
			<ProductInformation
				product={product}
				currentImageIndex={currentImageIndex}
				setCurrentImageIndex={setCurrentImageIndex}
			/>
			<ProductImage product={product} currentImageIndex={currentImageIndex} />
			<ProductVariations product={product} />
		</div>
	);
};

export default ProductCard;
