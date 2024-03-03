import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SharedSliceState } from './types'
import { User } from '@auth0/auth0-react'

const initialState: SharedSliceState = {
    user: undefined,
    accessToken: undefined,
}

export const sharedSlice = createSlice({
    name: 'shared',
    initialState,
    reducers: {
        setUser(state, data: PayloadAction<User | undefined>) {
            state.user = data.payload
        },
        setAccessToken(state, data: PayloadAction<string | undefined>) {
            state.accessToken = data.payload
        },
    },
})

export const { setUser, setAccessToken } = sharedSlice.actions

export default sharedSlice.reducer
