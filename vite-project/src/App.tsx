import { useState } from 'react'
//import logo from './logo.svg'

import Home from './pages/Home'
import Chuck from './pages/Chuck'
import ResgiterPage from './pages/RegisterPage'


import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"



const App =() => {
  return (<>
    <h1>App</h1>
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/Chuck">Chuck</Link>
            <Link to="/register">Register</Link>

        </div>
        <div className= 'container'>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/Chuck" element={<Chuck />} />
                <Route path="/register" element={<ResgiterPage />} />
            </Routes>
            </div>
       =
       
    </>
 
  )
}

export default App
