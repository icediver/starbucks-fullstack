import {
	EnumSorting,
	ISortingItem
} from '@/ui/catalog/sorting/sorting.interface';

export const sortingData: ISortingItem[] = [
	{
		label: 'Newest',
		value: EnumSorting.NEWEST
	},

	{
		label: 'Oldest',
		value: EnumSorting.OLDEST
	},

	{
		label: 'Price: low to hi',
		value: EnumSorting.LOW_TO_HI_PRICE
	},

	{
		label: 'Price: hi to low',
		value: EnumSorting.HI_TO_LOW_PRICE
	}
];
