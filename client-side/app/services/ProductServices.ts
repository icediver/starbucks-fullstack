import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface';

import { IProduct } from '@/types/product.interface';

import { axiosClassic } from '@/api/api';

const PRODUCTS = '/products';

export const ProductServices = {
	async getProducts(sortType?: EnumSorting) {
		const { data } = await axiosClassic.get<IProduct[]>(`${PRODUCTS}`, {
			params: {
				'sort-type': sortType
			}
		});
		return data;
	},
	async bySearchTerm(searchTerm: string) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/search`, {
			params: {
				searchTerm
			}
		});
	},
	async byId(id: number) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/${id}`);
	},
	async bySlug(slug: string) {
		return axiosClassic.get<IProduct>(`${PRODUCTS}/slug/${slug}`);
	},
	async getRelative(withoutId: number) {
		return axiosClassic.get<IProduct[]>(`${PRODUCTS}/relatives/${withoutId}`);
	}
};
