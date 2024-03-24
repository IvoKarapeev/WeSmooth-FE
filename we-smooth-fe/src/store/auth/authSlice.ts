import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthSliceState } from './types'
import { User } from '@auth0/auth0-react'

const initialState: AuthSliceState = {
    user: undefined,
    accessToken: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
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

export const { setUser, setAccessToken } = authSlice.actions

export default authSlice.reducer
