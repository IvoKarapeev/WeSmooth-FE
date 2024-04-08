import { useAuthSelector, useAuthDispatch } from './store/auth/authStore'
import { setAccessToken } from './store/auth/authSlice'
import './styles/main.scss';

function App() {
    const accessToken = useAuthSelector((state) => state.auth.accessToken)

    const authDispatch = useAuthDispatch()

    const handleLogout = () => {
        authDispatch(setAccessToken(undefined))
    }

    return (
        <div className="App">
            {accessToken && (
                <>
                    <p>Welcome to WeSmooth!</p>
                    <p>Your access token is: {accessToken}</p>
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    )
}

export default App
