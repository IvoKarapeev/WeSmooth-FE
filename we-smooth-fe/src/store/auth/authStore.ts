import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { useDispatch, useSelector, useStore } from 'react-redux'

const authStore = configureStore({
    reducer: {
        /**
         * The Authentication of the application - values that should be visible for logged in user and contains information about the authentication.
         */
        shared: authReducer,
    },
})

// Types
export type AuthState = ReturnType<typeof authStore.getState>
export type AuthDispatch = typeof authStore.dispatch

// Hooks
export const useAuthSelector = useSelector.withTypes<AuthState>()
export const useAuthDispatch = useDispatch.withTypes<AuthDispatch>()
export const useAuthStore = useStore.withTypes<typeof authStore>()

export default authStore
