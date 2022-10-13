import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='w-screen min-h-screen flex' >
        
        {/* Left Side */}
        <aside className='w-[200px] h-screen flex flex-col bg-white shadow-lg'>

            <div className='w-full h-[200px] flex flex-col justify-center items-center bg-gradient-to-tr from-sky-700 to-sky-500'>
                <h1>Jvalley</h1>
            </div>

            <nav className='w-full flex-1'>
                <Link to={'/'} className='w-full h-12 flex items-center px-4 hover:bg-sky-200' >
                     Dashboard 
                </Link>

                <Link to={'/users'} className='w-full h-12 flex items-center px-4 hover:bg-sky-200' >
                     User 
                </Link>

                <Link to={'/blog'} className='w-full h-12 flex items-center px-4 hover:bg-sky-200' >
                     Blog 
                </Link>
            </nav>

        </aside>
        {/* END LEFT SIDE */}

        {/* RIGHT SIDE */}
        <div className='flex-1 h-screen p-6 overflow-y-auto'>
            <Outlet />
        </div>
        {/* END RIGHT SIDE */}
    
    </div>
  )
}
