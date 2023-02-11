import { ChevronRightIcon } from '@chakra-ui/icons';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { FC } from 'react';

import { IProductDetails } from '@/types/product.interface';

const Breadcrumbs: FC<IProductDetails> = ({ product }) => {
	return (
		<Breadcrumb
			display={'flex'}
			justifyContent={'end'}
			spacing='8px'
			separator={<ChevronRightIcon color='gray.500' />}
			color={'#444'}
		>
			<BreadcrumbItem>
				<BreadcrumbLink href={'/'}>Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink
					_hover={{ textDecoration: 'none', cursor: 'default' }}
					href={''}
					color={'#666'}
				>
					{product.name}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	);
};

export default Breadcrumbs;
