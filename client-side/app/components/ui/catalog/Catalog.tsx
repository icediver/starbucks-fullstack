import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';

import Carousel from '@/ui/catalog/carousel/Carousel';
import Sorting from '@/ui/catalog/sorting/Sorting';
import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface';
import Loader from '@/ui/loader/Loader';

import { IProduct } from '@/types/product.interface';

import { ProductServices } from '@/services/ProductServices';

const Catalog: FC<{ products: IProduct[] }> = ({ products }) => {
	const [sortType, setSortType] = useState<EnumSorting>(EnumSorting.NEWEST);

	const { data, isLoading } = useQuery({
		queryKey: ['products', sortType],
		queryFn: () => ProductServices.getProducts(sortType),
		initialData: products
	});

	return (
		<div className={'relative'}>
			<div className={'text-right mt-10'}>
				<Sorting sortType={sortType} setSortType={setSortType} />
			</div>
			{isLoading ? <Loader /> : <Carousel products={data} />}
		</div>
	);
};

export default Catalog;
