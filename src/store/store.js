import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './apiStore';

export const store = configureStore({
    reducer: {
        api: apiReducer,
    },
});
