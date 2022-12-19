import React, {useState} from 'react'
import {useForm} from "react-hook-form"
import { AiOutlineEye } from "react-icons/ai"
export default function Register() {


    //state
    const [showPassword, setShowPassword] = useState(false);

    //import react hook form
    const {handleSubmit, watch, register, formState:{errors}} = useForm()

    //function submit form
    const submitForm  = (data)=>{
        console.info(data)
    }

    //toggle password
    const togglePassword = ()=>{
        setShowPassword(!showPassword)
    }


  return (
    <div className='App'>
        <h1>Register Page</h1>

        <form className='w-[300px] flex flex-col gap-4 items-start mt-10' 
        autoComplete='off' onSubmit={handleSubmit(submitForm)}>

            <div className='w-full flex flex-col gap-2 items-start'>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' className='w-full p-2' 
                {...register("email", {
                    required : { value : true, message : "email wajib diisi !"},
                    pattern : { value : /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]+)$/ 
                    , message : "email tidak valid"}
                } )} 
                />
                { errors?.email && <small className='text-red-500'>{ errors?.email.message }</small>}
            </div>

            <div className='w-full flex flex-col gap-2 items-start'>
                <label htmlFor="password">Password</label>
                <div className='relative w-full flex flex-col justify-center'>
                    <input type={showPassword ? "text" : "password"} id='password' className='w-full p-2' 
                    {...register("password", {
                        required : {value : true, message : "password wajib diisi"},
                        minLength : {
                            value : 6,
                            message : "minimal 6 karakter"
                        }
                    })} 
                    />
                    <AiOutlineEye className='absolute right-2 select-none cursor-pointer' onClick={togglePassword} />
                </div>
                {errors?.password && <small className='text-red-500'>{ errors?.password.message }</small>}
            </div>

            <div className='w-full flex flex-col gap-2 items-start'>
                <label htmlFor="password2"> Ulangi Password </label>
                <input type={showPassword ? "text" : "password"} id='password2' className='w-full p-2' 
                {...register("password2", {
                    validate : (val)=>{
                        if(watch("password") !== watch("password2")){
                            return errors.password2 = "password harus sama"
                        }                        
                    }
                })} 
                />
                {errors?.password2 && <small className='text-red-500'>{ errors?.password2.message }</small>}
            </div>

            <div className='w-full flex justify-end'>
                <button className='w-[120px] bg-sky-500 text-white' type='submit' >Register</button>
            </div>

        </form>
    </div>
  )
}
