import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {} from "react-router-dom"

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Login</h1>} />
      <Route path='/dashboard' element={<h1>Dashborad</h1>} />
    </Routes>
  )
}
