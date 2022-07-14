import { useState } from 'react'
//import logo from './logo.svg'

import Home from './pages/Home'
import Chuck from './pages/Chuck'
import ResgiterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Messagespage from './pages/Messagespage'
import Default from './layout/Default'
import Auth from './layout/Auth'


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"



const App = () => {
  return (<>
    {/* <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/chuck'>Chuck</Link>
      <Link to="/register">Register</Link>
      <Link to="/Messagespage">Messages</Link>

      <Link to="/login">Login</Link>
    </div> */}
    <div className='container'>
      <Routes>
        <Route path="/" element={<Default><Home /> </Default>} />
        <Route path="/chuck" element={<Default><Chuck /></Default>} />
        <Route path="/Messagespage" element={<Default><Messagespage /></Default>} />
        <Route path="/register" element={<Auth><ResgiterPage /></Auth>} />
        <Route path="/login" element={<Auth><LoginPage /></Auth>} />
      </Routes>
    </div>
  </>)
}

export default App