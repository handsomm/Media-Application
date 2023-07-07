import { usersApi } from '@/services/TMDB';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
});
