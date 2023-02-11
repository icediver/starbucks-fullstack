import cn from 'clsx';
import { Dispatch, FC, SetStateAction } from 'react';

import { TypeSize } from '@/store/cart/cart.types';

import { useCart } from '@/hooks/useCart';

import styles from '../Carousel.module.scss';

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI'];

interface ICarouselVariations {
	productId: number;
	selectedSize: TypeSize;
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>;
	variant?: 'small' | 'medium';
}

const SizeVariations: FC<ICarouselVariations> = ({
	setSelectedSize,
	selectedSize,
	variant = 'small'
}) => {
	const { cart } = useCart();
	return (
		<div
			className={cn(styles.variations, {
				[styles.medium]: variant === 'medium'
			})}
		>
			{SIZES.map(size => (
				<button
					key={size}
					className={cn({
						[styles.active]: selectedSize === size
					})}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	);
};

export default SizeVariations;
