import { createSlice } from '@reduxjs/toolkit';
import { ThemeStateType } from './types';

const initialState: ThemeStateType = 'light';

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state === 'light' ? 'dark' : 'light'
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
