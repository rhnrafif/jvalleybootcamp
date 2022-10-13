
import './App.css'
import {Route, Routes} from 'react-router-dom'
import ReactComponents from './pages/ReactComponents'
import ReactProps from './pages/ReactProps'

function App() {

  return (
    <Routes>

      <Route path='/' element={<ReactComponents />} />
      <Route path='/props' element={<ReactProps/>} />
      <Route path='/state' element={<h1>react State</h1>} />
      <Route path='/con-rendering' element={<h1>react Components</h1>} />
      <Route path='/lifecycle' element={<h1>react Components</h1>} />
      <Route path='/route' element={<h1>react Components</h1>} />


    </Routes>
  
    )
}

export default App
