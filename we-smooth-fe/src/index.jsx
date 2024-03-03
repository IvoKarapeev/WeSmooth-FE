import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AuthenticationEnforcer } from './components/auth-enforcer/authEnforcer'
import { Provider } from 'react-redux'
import sharedStore from './store/shared/sharedStore'
import { StrictMode } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <Provider store={sharedStore}>
            <AuthenticationEnforcer>
                <App />
            </AuthenticationEnforcer>
        </Provider>
    </StrictMode>
)
