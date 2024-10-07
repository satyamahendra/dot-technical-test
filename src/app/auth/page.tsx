"use client"

import React, { useState } from 'react'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

export default function Auth() {

    const { session } = useAuth()
    const [isShowSignUp, setIsShowSignUp] = useState<boolean>(false)

    const handleToggleShowSignUp = () => {
        setIsShowSignUp(prev => !prev)
    }

    if (session) {
        return redirect("/home")
    }

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className="duration-200 w-full sm:w-2/5 md:w-1/5">
                <h1 className='text-center text-lg' onClick={handleToggleShowSignUp}>{isShowSignUp ? "Sign Up" : "Log In"}</h1>
                {isShowSignUp ?
                    <SignupForm handleToggleShowSignUp={handleToggleShowSignUp} /> :
                    <LoginForm handleToggleShowSignUp={handleToggleShowSignUp} />
                }
                <div className='border p-4'>
                    <p>username: qwe123</p>
                    <p>password: qwe123</p>
                    <p>*atau bikin sendiri dengan signup juga bisa</p>
                    <p>*kalau error client side error itu refresh aja, kalau di local aman, kalo vercel ngga aman</p>
                </div>
            </div>
        </div>
    )
}
