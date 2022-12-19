import './App.css'
import {Route, Routes} from "react-router-dom"
import React from 'react'
import Register from './pages/Register'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/dashboard' element={<div>Dashboard</div>}/>
    </Routes>
  )
}

