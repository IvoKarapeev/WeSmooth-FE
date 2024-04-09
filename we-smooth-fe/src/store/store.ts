import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, useStore } from 'react-redux'
import authReducer from './auth/authSlice';
import themeReducer from './theme/themeSlice';

const store = configureStore({
    reducer: {
        /**
         * The Authentication of the application - values that should be visible for logged in user and contains information about the authentication.
         */
        auth: authReducer,
        theme: themeReducer
    },
})

// Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks
export const useAuthSelector = useSelector.withTypes<RootState>()
export const useAuthDispatch = useDispatch.withTypes<AppDispatch>()
export const useAuthStore = useStore.withTypes<typeof store>()

export default store;
