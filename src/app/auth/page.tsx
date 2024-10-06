"use client"

import React, { useState } from 'react'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

export default function Auth() {

    const { session } = useAuth()

    if (session) {
        return redirect("/home")
    }

    const [isShowSignUp, setIsShowSignUp] = useState<boolean>(false)

    const handleToggleShowSignUp = () => {
        setIsShowSignUp(prev => !prev)
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className="w-1/6">
                <h1 className='text-center text-lg' onClick={handleToggleShowSignUp}>{isShowSignUp ? "Sign Up" : "Log In"}</h1>
                {isShowSignUp ?
                    <SignupForm handleToggleShowSignUp={handleToggleShowSignUp} /> :
                    <LoginForm handleToggleShowSignUp={handleToggleShowSignUp} />
                }
                <div className='border p-4'>
                    <p>username: qwe123</p>
                    <p>password: qwe123</p>
                    *atau bikin sendiri dengan signup juga bisa
                </div>
            </div>
        </div>
    )
}
