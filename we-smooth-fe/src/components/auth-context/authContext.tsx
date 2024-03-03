import { useEffect } from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
import { useSharedDispatch } from '../../store/shared/sharedStore'
import { setAccessToken, setUser } from '../../store/shared/sharedSlice'
import { AuthContextProps } from './types'

const AuthenticationContext = (props: AuthContextProps) => {
    const { user, getAccessTokenSilently } = useAuth0()

    const sharedDispatch = useSharedDispatch()

    useEffect(() => {
        sharedDispatch(setUser(user))
        getAccessTokenSilently().then((token) => {
            sharedDispatch(setAccessToken(token))
        })
    })

    return <>{props.children}</>
}

export default withAuthenticationRequired(AuthenticationContext)
