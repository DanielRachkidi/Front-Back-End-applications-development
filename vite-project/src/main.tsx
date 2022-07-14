import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from './contexts/Auth'

import { BrowserRouter } from "react-router-dom";

import './styles/index.scss'

const first = <h1>Hello world </h1>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
</React.StrictMode>
)
