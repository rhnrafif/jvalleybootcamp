import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Routes , Route} from 'react-router-dom'
import './App.css'
import Axios from './pages/Axios'
import FetchApi from './pages/FetchApi'
import Query from './pages/Query'

const Navbar = ()=>{

  return(
    <nav>
      <Link to={"/"}>Fetch Api</Link>
      <Link to={"/axios"}>Axios</Link>
      <Link to={"/query"}>React Query</Link>
    </nav>
  )
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<FetchApi/>} />
      <Route path='/axios' element={<Axios />} />
      <Route path='/query' element={<Query/>} />
    </Routes>

    </>
  )
}

export default App
