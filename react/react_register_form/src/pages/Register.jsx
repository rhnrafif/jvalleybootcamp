import React from 'react'
import {useForm} from 'react-hook-form'


export default function Register() {

  //panggil function dari useform
  const { handleSubmit, watch, register, formState:{errors} } = useForm()

  //funtion submit form
  const submitForm = (data)=>{
    console.info(data);
  }

  return (
    <div className='App'>
      <h1>Register Page</h1>

      <form className='w-[300px] flex flex-col gap-4 mt-6 mx-auto' 
      autoComplete='off' 
      onSubmit={handleSubmit(submitForm)} >

        <div className='w-full flex flex-col gap-2'>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' className='w-full p-2' 
            {...register("email", {
              required : { value : true, message : "email wajib diisi !"},
              pattern : { value : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/ , message : "Email tidak valid"} 
            }) } 
            />
            {errors?.email && <small className='text-red-500'>{errors?.email.message}</small>}
        </div>

        <div className='w-full flex flex-col gap-2'>
            <label htmlFor="password">password</label>
            <input type="password" id='password' className='w-full p-2'
            {... register("password", {
              required : { value : true, message : "Password harus diisi !"}, //eksekusi utk error password
              minLength :{ value : 6, message : "Password harus 6 karakter !"}
            })} />
            {errors?.password && <small className='text-red-500'> {errors?.password.message} </small>}
        </div>

        <div className='w-full flex flex-col gap-2'>
            <label htmlFor="password2">password2</label>
            <input type="password" id='password2' className='w-full p-2'
            {... register("password2", {
              validate : (val)=>{
                if(watch("password") !== watch("password2")){ //validator
                  return errors.password2 = "Password harus sama"
                }
              }
            })} />
            {errors?.password2 && <small> {errors?.password2.message} </small>}
        </div>

        <div>
          <button className='w-[120px] bg-sky-500 text-white' type='submit'>Register</button>
        </div>
      </form>
    </div>
  )
}
