import { configureStore } from '@reduxjs/toolkit'
import sharedReducer from './sharedSlice'
import { useDispatch, useSelector, useStore } from 'react-redux'

const sharedStore = configureStore({
    reducer: {
        /**
         * The Shared State of the application - values that should be visible across the whole or most of the application.
         */
        shared: sharedReducer,
    },
})

// Types
export type SharedState = ReturnType<typeof sharedStore.getState>
export type SharedDispatch = typeof sharedStore.dispatch

// Hooks
export const useSharedSelector = useSelector.withTypes<SharedState>()
export const useSharedDispatch = useDispatch.withTypes<SharedDispatch>()
export const useSharedStore = useStore.withTypes<typeof sharedStore>()

export default sharedStore
