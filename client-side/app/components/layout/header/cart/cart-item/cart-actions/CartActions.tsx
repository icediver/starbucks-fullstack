import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react';
import { FC } from 'react';

import { ICartItem } from '@/types/cart-item.interface';

import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { getIncrementButtonProps, getDecrementButtonProps, getInputProps } =
		useNumberInput({
			step: 1,
			defaultValue: item.quantity,
			min: 1,
			max: 999
		});

	const inc = getIncrementButtonProps();
	const dec = getDecrementButtonProps();
	const input = getInputProps();

	const { removeFromCart, changeQuantity } = useActions();

	const { cart, total } = useCart();

	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity;

	return (
		<div>
			<HStack>
				<Button
					{...dec}
					size={'sm'}
					borderRadius={'50%'}
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<MinusIcon fontSize={13} boxSize={2} />
				</Button>
				<Input
					{...input}
					isDisabled={quantity === 1}
					focusBorderColor={'green.400'}
					readOnly
					_hover={{ cursor: 'default' }}
					fontSize={10}
					boxSize={6}
					size={'sm'}
					width={10}
					value={quantity}
				/>

				<Button
					{...inc}
					size={'sm'}
					borderRadius={'50%'}
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
				>
					<AddIcon fontSize={13} boxSize={2} />
				</Button>
			</HStack>
			<Button
				variant={'unstyled'}
				color={'#F23C3D'}
				marginTop={2}
				size={'sm'}
				opacity={0.8}
				onClick={() => {
					removeFromCart({ id: item.id });
				}}
			>
				Remove
			</Button>
		</div>
	);
};

export default CartActions;
