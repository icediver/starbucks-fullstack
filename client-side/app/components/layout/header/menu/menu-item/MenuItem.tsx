import Link from 'next/link';
import { FC } from 'react';

import { IMenuLink } from '@/layout/header/menu/menu-item/menu-item.interface';

interface IMenuItem {
	item: IMenuLink;
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li>
			<Link href={item.link}>{item.name}</Link>
		</li>
	);
};

export default MenuItem;
