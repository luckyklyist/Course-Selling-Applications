import { useState } from 'react'
import { Route, Routes } from "react-router-dom"
import LoiginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import Navbar from './components/NavBar'
import Home from './Pages/Home'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoiginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </>
  )
}

export default App
