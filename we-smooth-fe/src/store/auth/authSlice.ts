import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthSliceState } from './types'
import { callBackendApi } from '../../services/backend-api/backendApi'
import { USERS_OAUTH2 } from '../../services/backend-api/constants'

const initialState: AuthSliceState = {
    accessToken: undefined,
}

export const fetchJwt = createAsyncThunk(
    'auth/fetchJwt',
    async (user: { username: string; password: string }) => {
        const result = await callBackendApi(USERS_OAUTH2, {
            method: 'POST',
            body: JSON.stringify(user),
        })
        const jwt = await result.text()
        return jwt
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken(state, data: PayloadAction<string | undefined>) {
            state.accessToken = data.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            fetchJwt.fulfilled,
            (state, data: PayloadAction<string | undefined>) => {
                state.accessToken = data.payload
            }
        )
    },
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer
