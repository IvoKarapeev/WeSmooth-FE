import { FunctionComponent, useMemo } from 'react'
import { RootState, useAuthSelector } from '../../store/store'
import { AuthContextProps } from './types'
import Login from './login'

/**
 * Wrapper component which reads the user data and access token information from Auth0
 * for the currently signed-in user and preserves it at the Shared State for usage within the application.
 * @param props the components that should be secured and need to access the the user and access token information.
 */
const AuthenticationContext: FunctionComponent<AuthContextProps> = ({
    children,
}) => {
    const accessToken = useAuthSelector(
        (state: RootState) => state.auth.accessToken
    )

    const page = useMemo(() => {
        if (accessToken) {
            return children
        }
        return <Login />

    }, [accessToken, children])

    return page
}

export default AuthenticationContext
