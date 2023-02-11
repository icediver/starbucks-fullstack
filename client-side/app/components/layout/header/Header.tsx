import Cart from "@/layout/header/cart/Cart";
import Menu from "@/layout/header/menu/Menu";
import Search from "@/layout/header/search/Search";
import {FC} from 'react'

import styles from './Header.module.scss';

const Header: FC = () => {
	
	
	return <header className={styles.header}>
		<Menu/>
		<Search/>
		<Cart/>
	</header>;
}

export default Header
