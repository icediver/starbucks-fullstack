import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useCart = () => {
	const cart = useTypedSelector(state => state.cart.items);

	const total = cart.reduce(
		(acc, item) => acc + item.product.price * item.quantity,
		0
	);

	const totalProducts = cart.map(item => ({
		description: item.product.description.substring(0, 128),
		quantity: item.quantity,
		amount: item.product.price,
		vat_code: 1
	}));
	return { cart, total, totalProducts };
};
