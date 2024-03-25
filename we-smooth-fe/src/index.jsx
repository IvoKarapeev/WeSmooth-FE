import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import App from './App'
import authStore from './store/auth/authStore'
import AuthContext from './components/auth-context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <Provider store={authStore}>
            <AuthContext>
                <App />
            </AuthContext>
        </Provider>
    </StrictMode>
)
