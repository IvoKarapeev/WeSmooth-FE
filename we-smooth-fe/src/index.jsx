import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthenticationEnforcer } from './components/auth-enforcer/authEnforcer'
import { Provider } from 'react-redux'
import authStore from './store/auth/authStore'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <Provider store={authStore}>
            <AuthenticationEnforcer>
                <App />
            </AuthenticationEnforcer>
        </Provider>
    </StrictMode>
)
