import React from 'react'
import { FaGoogle } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useAuth } from '../context/AuthContext'
import { useState } from 'react'
import axios from 'axios';
import getBaseURL from '../utils/baseURL'

const AdminLogin = () => {

    const [message, setMessage] = useState("");
    const navigate=useNavigate();
        const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
  const onSubmit = async(data) => {

    console.log(data)
    
    try {

        const response=await axios.post(`${getBaseURL()}/api/auth/admin`,data,{
            headers:{
                'Content-Type':'application/json'
            }
        })

        const auth =response.data;
        console.log("auth",auth);
        if(auth.token){
            localStorage.setItem('token',auth.token);
            setTimeout(()=>{
                localStorage.removeItem('token');
                alert("Token is expired,please login again");
                navigate("/")
            },3600*1000)
        }

        alert("Admin login successfull");
        navigate("/dashboard")
            
        } catch (err) {
            console.log("error",err)
            setMessage("Please provide a valid username and password")
        }

  }

  return (
    <div className='h-[calc(100vh-120px)] flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Admin User Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold sm-2' htmlFor='username'>Username</label>
                    <input {...register("username", { required: true })} type='username' className='shadow appearance-none border rounded w-full py-2 leading-tight focus:outshaw'   placeholder='Enter a username'/>
                </div>
                

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold sm-2' name='password' htmlFor='password'>Password</label>
                    <input {...register("password", { required: true })} type='password' className='shadow appearance-none border rounded w-full py-2 leading-tight focus:outshaw' placeholder='Enter a password'/>
                </div>
                <div>
                    <button className='bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Login </button>
                </div>
            </form>
            {
                message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
            }
            

            <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book Store. All rights reserved.</p>
            </div>
    </div>
  )
}

export default AdminLogin