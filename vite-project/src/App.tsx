import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import ChuckPage from './pages/Chuck'
import ResgiterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import MessagesPage from './pages/Messagespage'
import MessagesDeletePage from './pages/MessagesDeletePage'
import MessagesEditPage from './pages/MessagesEditPage'
import Default from './layout/Default'
import Auth from './layout/Auth'

const App = () => {
  return (<>
      <Routes>
        <Route path="/" element={<Default><Home /></Default>} />
        <Route path="/chuck" element={<Default><ChuckPage /></Default>} />
        <Route path="/Messagespage" element={<Default><MessagesPage /></Default>} />
        <Route path="/Messagespage/:messageId/delete" element={<Default><MessagesDeletePage /></Default>} />
        <Route path="/Messagespage/:messageId/edit" element={<Default><MessagesEditPage /></Default>} />
        <Route path="/register" element={<Auth><ResgiterPage /></Auth>} />
        <Route path="/login" element={<Auth><LoginPage /></Auth>} />
      </Routes>
  </>)
}

export default App