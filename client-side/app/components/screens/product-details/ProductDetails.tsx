import { FC } from 'react';

import Layout from '@/layout/Layout';

import Catalog from '@/ui/catalog/Catalog';
import Heading from '@/ui/heading/Heading';

import { IProductDetails } from '@/types/product.interface';

import { products } from '@/data/product.data';
import Breadcrumbs from '@/screens/product-details/product-breadcrumbs/Breadcrumbs';
import ProductCard from '@/screens/product-details/product-card/ProductCard';
import ProductNavigation from '@/screens/product-details/product-navigation/ProductNavigation';

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading>Product details</Heading>
			<div>
				<Breadcrumbs product={product} />
				<ProductNavigation productId={product.id} />
			</div>
			<ProductCard product={product} />
			<Catalog products={products} />
		</Layout>
	);
};

export default ProductDetails;
