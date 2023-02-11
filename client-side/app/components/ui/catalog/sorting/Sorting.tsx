import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu';
import { Button } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';

import { sortingData } from '@/ui/catalog/sorting/sorting.data';
import { EnumSorting } from '@/ui/catalog/sorting/sorting.interface';

interface ISorting {
	sortType: EnumSorting;
	setSortType: Dispatch<SetStateAction<EnumSorting>>;
}

const Sorting: FC<ISorting> = ({ setSortType, sortType }) => {
	return (
		<Menu placement={'bottom-end'}>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{sortingData.find(sort => sort.value === sortType)?.label}
			</MenuButton>
			<MenuList>
				{sortingData.map(sort => (
					<MenuItem
						key={sort.value}
						onClick={() => setSortType(sort.value)}
						justifyContent={'end'}
					>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default Sorting;
