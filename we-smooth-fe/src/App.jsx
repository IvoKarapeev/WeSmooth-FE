import { useAuth0 } from '@auth0/auth0-react'
import { useSharedSelector } from './store/shared/sharedStore'
import { PocBlueprintsPage } from './pages/poc-blueprints-api/pocBlueprintsPage'
import { setAccessToken, setUser } from './store/shared/sharedSlice'
import { useSharedDispatch } from './store/shared/sharedStore'

function App() {
    const { logout } = useAuth0()
    const user = useSharedSelector((state) => state.shared.user)
    const accessToken = useSharedSelector((state) => state.shared.accessToken)

    const sharedDispatch = useSharedDispatch()

    const handleLogout = () => {
        sharedDispatch(setUser(undefined))
        sharedDispatch(setAccessToken(undefined))
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
