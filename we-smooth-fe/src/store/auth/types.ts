export type AuthSliceState = {
    /**
     * The Access Token retrieved during sign-in from the backend.
     * This token is used to authorize when calling the backend.
     */
    accessToken?: string
}
