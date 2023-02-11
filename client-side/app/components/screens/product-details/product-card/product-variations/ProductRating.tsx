import { FC, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

import { IProductDetails } from '@/types/product.interface';
import { IReview } from '@/types/reviews.interface';

import styles from '../ProductCard.module.scss';

const ProductRating: FC<IProductDetails> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			(product.reviews.reduce(
				(acc: number, item: IReview, index) => acc + item.rating,
				0
			) *
				10) /
				product.reviews.length
		) / 10
	);

	const handleRating = (rate: number) => {
		setRating(rate);
	};

	return (
		<div className={styles.rating}>
			<div>Review:</div>
			<Rating
				onClick={handleRating}
				SVGstyle={{ display: 'inline-block' }}
				allowFraction
				showTooltip
				size={32}
				initialValue={rating}
				tooltipStyle={{ backgroundColor: '#6B655D' }}
				readonly
			/>
		</div>
	);
};

export default ProductRating;
