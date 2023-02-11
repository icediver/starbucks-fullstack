import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { FC, useState } from 'react';

import styles from './Search.module.scss';

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div className={styles.search}>
			<InputGroup>
				<Input
					variant={'flushed'}
					type={'search'}
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder={'search'}
					focusBorderColor={'#008D64'}
				/>
				<InputRightElement
					pointerEvents={'none'}
					children={<SearchIcon color={'gray.500'} />}
				/>
			</InputGroup>
		</div>
	);
};

export default Search;
