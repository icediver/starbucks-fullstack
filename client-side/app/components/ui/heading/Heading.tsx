import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	children,
	className
}) => {
	return (
		<h1
			className={cn(
				'font-black text-green text-6xl w-2/3 ml-auto leading-tight text-right',
				className
			)}
		>
			{children}
		</h1>
	);
};

export default Heading;
