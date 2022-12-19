import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AddSiswa from './pages/AddSiswa'
import Dashboard from './pages/Dashboard'

export default function App() {
  
  
  return (
    <Routes>
      <Route path='/' element={<h1>Login</h1>} />
      <Route path='/dashboard' element={<Dashboard/>} >
        <Route index element={<h1>List data Siswa</h1>} />
        <Route path='/dashboard/add' element={<AddSiswa/>} />
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>} />
    </Routes>
  )
}
