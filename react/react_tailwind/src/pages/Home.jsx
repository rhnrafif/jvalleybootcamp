import React from 'react'

export default function Home() {
  return (
    <main className='bg-gradient-to-br from-sky-300 to-orange-300
    w-screen min-h-screen max-w-[520px] mx-auto'>
        <h1 className='text-white text-4xl font-light'>Home Page</h1>
        
        <form className='
        w-[480px] m-auto rounded-md bg-white p-6 flex flex-col gap-4 shadow-lg
        '>

            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='h-10 px-3 bg-slate-100' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className='h-10 px-3 bg-slate-100' />
            </div>
            
            

        </form>
    </main>
  )
}
