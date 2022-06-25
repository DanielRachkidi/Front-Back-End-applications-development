import { useState } from 'react'
//import logo from './logo.svg'

import Home from './pages/Home'
import Chuck from './pages/Chuck'
import ResgiterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'



import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"



const App = () => {
  return (<>
    <div id="nav">
      <Link to='/'>Home</Link>
      <Link to='/chuck'>Chuck</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chuck" element={<Chuck />} />
        <Route path="/register" element={<ResgiterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  </>)
}

export default App