import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';

export const themeStore = configureStore({
    reducer: {
        theme: themeReducer,
    },
});

// Types
export type ThemeState = ReturnType<typeof themeStore.getState>
export type ThemeDispatch = typeof themeStore.dispatch
