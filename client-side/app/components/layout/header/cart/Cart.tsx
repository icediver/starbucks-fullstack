import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/modal';
import { Button } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { FC, useRef, useState } from 'react';

import CartItem from '@/layout/header/cart/cart-item/CartItem';

import { useCart } from '@/hooks/useCart';

import { formatToCurrency } from '@/utils/format-to-currency';

import styles from './Cart.module.scss';
import { PaymentService } from '@/services/PaymentService';

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef<HTMLButtonElement>(null);

	const { cart, totalProducts, total } = useCart();

	const { push } = useRouter();

	const paymentObj = {};

	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(totalProducts),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url);
			},
			onError(err: AxiosError) {
				console.log(err.message);
			}
		}
	);

	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
				<div className={styles.badge}>{cart.length}</div>
				<span className={styles.text}>MY BASKET</span>
			</button>
			<Drawer
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>My Cart</DrawerHeader>
					<DrawerBody>
						<div className={styles.cart}>
							{cart.length ? (
								cart.map(item => (
									<CartItem item={item} key={item.product.id + item.size} />
								))
							) : (
								<div>Cart is Empty</div>
							)}
						</div>
					</DrawerBody>
					<DrawerFooter
						justifyContent={'space-between'}
						borderTopColor={'#F7F4F0'}
						borderTopWidth={1}
					>
						<div className={styles.footer}>
							<div>Total</div>
							<div>{formatToCurrency(total)}</div>
						</div>
						<Button colorScheme={'whatsapp'} onClick={() => mutate()}>
							Checkout
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default Cart;
