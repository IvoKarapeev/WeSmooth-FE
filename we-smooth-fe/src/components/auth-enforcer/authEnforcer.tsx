import { Auth0Provider } from '@auth0/auth0-react'
import { Auth0Config, AuthEnforcerProps } from './types'
import AuthenticationContext from '../auth-context/authContext'

/**
 * Wrapper component that enforces authorization to Auth0.
 * It uses AuthenticationContext to preserve the information of the signed-in user into the Shared State.
 * @param props the components that should be secured and need to access the the user and access token information.
 */
export const AuthenticationEnforcer = (props: AuthEnforcerProps) => {
    const auth0config: Auth0Config = {
        domain: import.meta.env.VITE_OAUTH2_DOMAIN,
        clientId: import.meta.env.VITE_OAUTH2_CLIENT_ID,
        authorizationParams: {
            audience: import.meta.env.VITE_OAUTH2_AUDIENCE,
            redirect_uri: import.meta.env.VITE_OAUTH2_REDIRECT_URI,
        },
    }

    return (
        <Auth0Provider {...auth0config}>
            <AuthenticationContext>{props.children}</AuthenticationContext>
        </Auth0Provider>
    )
}
