import { useState } from 'react'
//import logo from './logo.svg'

import Home from './pages/Home'
import Chuck from './pages/Chuck'

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"



const App =() => {
  return (<>
    <h1>App</h1>
        <BrowserRouter>
        <div id="nav">
            <Link to="/">Home</Link>
            <Link to="/Chuck">Chuck</Link>

        </div>
        <div className= 'container'>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/Chuck" element={<Chuck />} />
            </Routes>
            </div>
        </BrowserRouter>
       
    </>
 
  )
}

export default App
