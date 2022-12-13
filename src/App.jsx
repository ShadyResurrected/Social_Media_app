import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route exact path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
