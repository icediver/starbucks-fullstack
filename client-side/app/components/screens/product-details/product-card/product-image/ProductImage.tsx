import Image from 'next/image';
import { FC } from 'react';

import { IProductDetails } from '@/types/product.interface';

import { formatToCurrency } from '@/utils/format-to-currency';

import styles from '../ProductCard.module.scss';

interface IProductImage extends IProductDetails {
	currentImageIndex: number;
}

const ProductImage: FC<IProductImage> = ({ product, currentImageIndex }) => {
	return (
		<div className={styles.image}>
			<div className={styles.main}>
				<Image
					src={product.images[currentImageIndex]}
					alt={product.name}
					width={260}
					height={260}
				/>
			</div>
			<div className={styles.price}>{formatToCurrency(product.price)}</div>
		</div>
	);
};

export default ProductImage;
