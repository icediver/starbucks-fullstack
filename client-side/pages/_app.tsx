import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import '@/assets/styles/globals.scss';

import { persistor, store } from '@/store/store';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<ChakraProvider>
						<Component {...pageProps} />
					</ChakraProvider>
				</PersistGate>
			</Provider>
			<ReactQueryDevtools initialIsOpen={false} />
			
			
		</QueryClientProvider>
	);
}
