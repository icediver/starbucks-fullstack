import { FC } from 'react';

import CarouselItem from '@/ui/catalog/carousel/carousel-item/CarouselItem';

import styles from './Carousel.module.scss';
import { IProduct } from '@/types/product.interface';

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.carousel}>
			{products.map((item, index) => (
				<CarouselItem product={item} key={item.id} index={index} />
			))}
		</div>
	);
};

export default Carousel;
