import { FunctionComponent, useCallback } from 'react'
import { useAuthDispatch } from '../../store/store'
import { fetchJwt } from '../../store/auth/authSlice'

const Login: FunctionComponent = () => {
    const authDispatch = useAuthDispatch()

    const login = useCallback(() => {
        const username = (
            document.getElementById('input-username') as HTMLInputElement
        ).value
        const password = (
            document.getElementById('input-password') as HTMLInputElement
        ).value
        const user = {
            username,
            password,
        }
        authDispatch(fetchJwt(user))
    }, [])

    return (
        <>
            <label htmlFor="input-username">
                Username
                <input id="input-username" title="Username" />
            </label>
            <label htmlFor="input-password">
                Password
                <input id="input-password" title="Password" />
            </label>
            <button type="button" onClick={login}>
                Login
            </button>
        </>
    )
}

export default Login
