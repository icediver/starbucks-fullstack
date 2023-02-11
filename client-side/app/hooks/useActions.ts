import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { carouselSlice } from '@/store/carousel/carousel.slice';
import { cartSlice } from '@/store/cart/cart.slice';

const rootAction = {
	...cartSlice.actions,
	...carouselSlice.actions
};

export const useActions = () => {
	const dispatch = useDispatch();

	return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
