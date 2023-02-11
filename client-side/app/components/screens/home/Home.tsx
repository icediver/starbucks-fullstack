import axios from 'axios';
import { FC } from 'react';

import Layout from '@/layout/Layout';

import Catalog from '@/ui/catalog/Catalog';
import Heading from '@/ui/heading/Heading';

import { IProductsPage } from '../../../../pages';

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Heading className={'text-right'}>The happiest hour ot the year</Heading>
			<Catalog products={products} />
		</Layout>
	);
};

export default Home;

const axiosCaptureInstance = axios.create({
	baseURL: `${process.env.SERVER_URL}`,
	headers: {
		'Content-type': 'application/json',
		'Idempotence-Key': 'idempotenceKey'
	},
	auth: {
		username: 'user',
		password: 'password'
	},
	data: {
		amount: {
			value: 34,
			currency: 'RUB'
		}
	}
});
