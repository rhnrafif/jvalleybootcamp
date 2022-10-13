import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

export default function App() {

  // state
  const [isLogin, setIsLogin] = useState(false)


  // check apakah ada user di localstorage
  useEffect(()=>{

    const user = localStorage.getItem('user')
    if(user){
      return setIsLogin(true)
    }

    setIsLogin(false)
  },[])


  // consitional rendering
  if(isLogin){
    return(
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='*' element={<h1>404 Page Not Found</h1>} />
   </Routes>
    )
  }

  return (
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='*' element={<h1>404 Page Not Found</h1>} />
   </Routes>
  )
}
