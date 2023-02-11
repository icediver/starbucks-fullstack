import { GetStaticProps, NextPage } from 'next';

import { IProduct } from '@/types/product.interface';

import Home from '@/screens/home/Home';
import { ProductServices } from '@/services/ProductServices';

export interface IProductsPage {
	products: IProduct[];
}

const HomePage: NextPage<IProductsPage> = ({ products }) => {
	return <Home products={products} />;
};
export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductServices.getProducts();
	return {
		props: {
			products
		}
	};
};
export default HomePage;
