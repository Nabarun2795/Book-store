import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'

const Register = () => {
     const [message, setMessage] = useState("");
    const {registerUser}=useAuth()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

    const onSubmit = async (data) => {
        const { email, password } = data
        console.log(email);
        try {
            await registerUser(email, password);
            setMessage("User is registered successfully")
        } catch (err) {
            console.log("error",err)
            setMessage("User could not be registered")
        }
    }

    const handleSignInGoogle = async() => {

    try {
            await signInGoogle();
            alert("Login Successful")
            navigate("/")
        } catch (err) {
            console.log("error",err)
            setMessage("Please provide a valid username and password")
        }

  }
  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Register</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold sm-2' htmlFor='email'>Email</label>
                    <input {...register("email", { required: true })} type='email' className='shadow appearance-none border rounded w-full py-2 leading-tight focus:outshaw'   placeholder='Enter a email'/>
                </div>
                

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold sm-2' name='password' htmlFor='password'>Password</label>
                    <input {...register("password", { required: true })} type='password' className='shadow appearance-none border rounded w-full py-2 leading-tight focus:outshaw' placeholder='Enter a password'/>
                </div>
                {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register </button>
                </div>
            </form>
            <div className='mt-4'>
                <button 
                
                className='w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                <FaGoogle  className='mr-2'/>
                Sign in with Google
                </button>
            </div>

            <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Register