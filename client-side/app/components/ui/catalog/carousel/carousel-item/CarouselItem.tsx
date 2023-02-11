import cn from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';

import AddToCartButton from '@/ui/catalog/carousel/carousel-item/AddToCartButton';
import SizeVariations from '@/ui/catalog/carousel/carousel-item/SizeVariations';
import CarouselNavigation from '@/ui/catalog/carousel/carousel-item/carousel-navigation/CarouselNavigation';
import { useCarousel } from '@/ui/catalog/carousel/carousel-item/useCarousel';
import { ICarouselItem } from '@/ui/catalog/carousel/carousel.interface';

import { TypeSize } from '@/store/cart/cart.types';

import { useActions } from '@/hooks/useActions';

import styles from '../Carousel.module.scss';

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT');

	const { selectedItemIndex } = useCarousel();
	const { selectSlide } = useActions();
	const isActive = index === selectedItemIndex;

	return (
		<motion.div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			// onClick={() => selectSlide(index)}
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.12 } : {}}
			transition={{ duration: 1, type: 'spring' }}
			aria-label={'Select item'}
			role={'button'}
		>
			<div className=''>
				<CarouselNavigation
					onSelectSlide={() => selectSlide(index)}
					product={product}
					isActive={isActive}
				/>

				<button className={styles.heading} onClick={() => selectSlide(index)}>
					<span>{product.name}</span>
				</button>

				{isActive ? (
					<>
						<SizeVariations
							productId={product.id}
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<AddToCartButton product={product} selectedSize={selectedSize} />
						<Link href={`/product/${product.slug}`} className={styles.link}>
							more...
						</Link>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	);
};

export default CarouselItem;
