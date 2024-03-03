import { configureStore } from '@reduxjs/toolkit'
import sharedReducer from './sharedSlice'
import { useDispatch, useSelector, useStore } from 'react-redux'

const sharedStore = configureStore({
    reducer: {
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
