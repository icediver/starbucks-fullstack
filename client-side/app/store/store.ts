// import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { carouselSlice } from '@/store/carousel/carousel.slice';
import { cartSlice } from '@/store/cart/cart.slice';

const persistConfig = {
	key: 'coffee-shop',
	storage,
	whitelist: ['cart']
};

const rootReducer = combineReducers({
	cart: cartSlice.reducer,
	carousel: carouselSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
