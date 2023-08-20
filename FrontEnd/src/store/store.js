import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import { authTokenSlice } from './auth/authSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		// auth: authSlice.reducer,
		authToken: authTokenSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});
