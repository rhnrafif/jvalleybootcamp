import React from 'react'
import "./App.css"
import {Route, Routes} from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<>Home</>} />
      <Route path='/login' element={<>Login</>} />
    </Routes>
  )
}
