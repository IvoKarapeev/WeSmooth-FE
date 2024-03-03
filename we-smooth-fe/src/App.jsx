import { useSharedSelector } from './store/shared/sharedStore'

function App() {
    const user = useSharedSelector((state) => state.shared.user)
    const accessToken = useSharedSelector((state) => state.shared.accessToken)

    return (
        <div className="App">
            {user && (
                <>
                    <p>Hello {user.name}! Welcome to WeSmooth!</p>
                    <p>Your access token is: {accessToken}</p>
                </>
            )}
        </div>
    )
}

export default App
