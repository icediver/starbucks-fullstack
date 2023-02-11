export enum EnumSorting {
	LOW_TO_HI_PRICE = 'low-to-high',
	HI_TO_LOW_PRICE = 'high-to-low',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}

export interface ISortingItem {
	label: 'Price: low to hi' | 'Price: hi to low' | 'Newest' | 'Oldest';
	value: EnumSorting;
}
