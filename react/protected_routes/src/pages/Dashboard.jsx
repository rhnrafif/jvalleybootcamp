import React, {useState, useEffect} from 'react'

export default function Dashboard() {

    // state
    const [user, setUser] = useState()

    // clc
    useEffect(()=>{
        let result = JSON.parse(localStorage.getItem('user'))
        setUser({
            email : result.email
        })

    },[])

    // logout
    const handleLogOut = ()=>{
        localStorage.clear()
        window.location.reload()
    }


  return (
    <main className='
    w-screen min-h-screen flex flex-col max-w-[1080px] mx-auto
    '>
        <h1>
            Welcome {user?.email}
        </h1>

        <button className='h-12 w-[120px] mt-4 bg-white text-black text-2xl rounded-md' onClick={handleLogOut}>
            Logout
        </button>

    </main>
  )
}
