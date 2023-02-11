import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import { FC } from 'react';

import { useCarousel } from '@/ui/catalog/carousel/carousel-item/useCarousel';
import { ICarouselNavigation } from '@/ui/catalog/carousel/carousel.interface';

import { useActions } from '@/hooks/useActions';

import styles from './CarouselNavigation.module.scss';
import { products } from '@/data/product.data';

const CarouselNavigation: FC<ICarouselNavigation> = ({
	product,
	isActive,
	onSelectSlide
}) => {
	const { prevSlide, nextSlide } = useActions();
	const {} = useCarousel();

	return (
		<div className={styles.navigation}>
			{isActive && (
				<div className={styles.arrows}>
					<button onClick={() => prevSlide()} className={styles.arrow}>
						<ChevronLeftIcon fontSize={46} />
					</button>
					<button
						onClick={() => nextSlide({ carouselLength: products.length })}
						className={styles.arrow}
					>
						<ChevronRightIcon fontSize={46} />
					</button>
				</div>
			)}
			<button onClick={onSelectSlide} className={styles.image}>
				<Image
					src={product.images[0]}
					alt={product.name}
					width={315}
					height={315}
					draggable={false}
				/>
			</button>
		</div>
	);
};

export default CarouselNavigation;
