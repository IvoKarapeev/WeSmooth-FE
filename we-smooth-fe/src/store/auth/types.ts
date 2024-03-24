import { User } from '@auth0/auth0-react'

export type AuthSliceState = {
    /**
     * The User object retrieved during sign-in via Auth0.
     */
    user?: User
    /**
     * The Access Token retrieved during sign-in via Auto0.
     * This token is used to authorize when calling the backend.
     */
    accessToken?: string
}
