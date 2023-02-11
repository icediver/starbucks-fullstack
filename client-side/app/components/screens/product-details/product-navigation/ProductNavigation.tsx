import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import cn from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import styles from './ProductNavigation.module.scss';
import { useProductNavigation } from '@/screens/product-details/product-navigation/useProductNavigation';

const ProductNavigation: FC<{ productId: number }> = ({ productId }) => {
	const { nextProductSlug, prevProductSlug } = useProductNavigation(productId);

	return (
		<div className={styles.nav}>
			<Link
				href={`/product/${prevProductSlug}`}
				className={cn({ disabled: !prevProductSlug })}
			>
				<ChevronLeftIcon fontSize={48} />
			</Link>
			<Link
				href={`/product/${nextProductSlug}`}
				className={cn({ disabled: !nextProductSlug })}
			>
				<ChevronRightIcon fontSize={48} />
			</Link>
		</div>
	);
};

export default ProductNavigation;
