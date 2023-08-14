import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import AppRoutes from './routes'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="429155420369-h3fu3jodd98r3pv3bbcf68ifs0do1g12.apps.googleusercontent.com">
      <AppRoutes/>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
