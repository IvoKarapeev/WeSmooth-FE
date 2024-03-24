import { useAuth0 } from '@auth0/auth0-react'
import { useAuthSelector } from './store/auth/authStore'
import { PocBlueprintsPage } from './pages/poc-blueprints-api/pocBlueprintsPage'
import { setAccessToken, setUser } from './store/auth/authSlice'
import { useAuthDispatch } from './store/auth/authStore'

function App() {
    const { logout } = useAuth0()
    const user = useAuthSelector((state) => state.shared.user)
    const accessToken = useAuthSelector((state) => state.shared.accessToken)

    const authDispatch = useAuthDispatch()

    const handleLogout = () => {
        authDispatch(setUser(undefined))
        authDispatch(setAccessToken(undefined))
        logout()
    }

    return (
        <div className="App">
            {user && (
                <>
                    <p>Hello {user.name}! Welcome to WeSmooth!</p>
                    <p>Your access token is: {accessToken}</p>
                    <button onClick={handleLogout}>Logout</button>
                    <PocBlueprintsPage />
                </>
            )}
        </div>
    )
}

export default App
