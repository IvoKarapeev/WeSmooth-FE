import ReactDOM from 'react-dom/client'
import './index.scss'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import store from './store/store'
import AuthContext from './components/auth-context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <AuthContext>
                    <App />
                </AuthContext>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
