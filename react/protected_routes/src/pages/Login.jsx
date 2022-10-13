import React from 'react'

export default function Login() {


    const handleLogin = (e)=>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        if(!email || !password){
            return alert("Silahkan lengkapi data Anda !")
        }

        if(password.length < 6){
            return alert("Password harus lebih dari 6 karakter !")
        }

        // store value ke local storage
        localStorage.setItem('user', JSON.stringify({
            email : email,
            password : btoa(password)
        }))

        // reload page
        window.location.reload()
    }


  return (
    <main className='
    w-screen min-h-screen flex flex-col max-w-[1080px] items-center mx-auto 
    '>

        <form className='bg-white p-6 flex flex-col gap-4 shadow-lg rounded-md w-full max-w-[500px] mt-20' autoComplete='off' onSubmit={handleLogin}>
            <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className='h-12 px-3 border-[1px] rounded-md border-sky-700' />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' className='h-12 px-3 border-[1px] rounded-md border-sky-700' />
            </div>

            <div className='flex mt-4'>
                <button className='w-[120px] h-12 bg-sky-600 text-white rounded-md ml-auto' type='submit'>Login</button>
            </div>
        </form>

    </main>
  )
}
