import { Button } from '@chakra-ui/react';
import { FC } from 'react';

import { COLORS } from '@/config/color.config';

import { TypeSize } from '@/store/cart/cart.types';

import { IProduct } from '@/types/product.interface';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

interface IAddToCartButton {
	product: IProduct;
	selectedSize: TypeSize;
	variant?: 'small' | 'medium';
}

const AddToCartButton: FC<IAddToCartButton> = ({
	product,
	selectedSize,
	variant = 'small'
}) => {
	const { addToCart, removeFromCart } = useActions();
	const { cart } = useCart();
	const currentElement = cart.find(
		item => item.product.id === product.id && item.size === selectedSize
	);

	const isSmall = variant === 'small';

	return (
		<>
			<div className={'text-center'}>
				<Button
					onClick={() =>
						currentElement
							? removeFromCart({ id: currentElement.id })
							: addToCart({ product, quantity: 1, size: selectedSize })
					}
					color={isSmall ? COLORS.green : COLORS.white}
					backgroundColor={isSmall ? '#EDF2F7' : COLORS.green}
					className={'tracking-widest font-normal'}
					marginTop={10}
					borderRadius={20}
					fontWeight={500}
					textTransform={'uppercase'}
					fontSize={isSmall ? 12 : 16}
					_hover={{
						backgroundColor: isSmall ? '#CBD5E0' : COLORS['dark-green']
					}}
				>
					{currentElement ? 'Remove from basket' : 'Add to basket'}
				</Button>
			</div>
		</>
	);
};

export default AddToCartButton;
