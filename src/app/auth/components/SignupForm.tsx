
"use client"

import React from 'react'
import { signup } from '../actions'
import Button from '@/components/Button'

interface SignupFormProps {
    handleToggleShowSignUp: () => void
}

export default function SignupForm({ handleToggleShowSignUp }: SignupFormProps) {

    async function handleSignup(formData: FormData) {
        await signup(formData)
    }


    return (
        <form action={handleSignup} className='flex flex-col gap-3 p-6 rounded-xl'>
            <label htmlFor="username">Username</label>
            <input
                name="username"
                type="text"
                placeholder="username"
                required
                className="px-4 py-2 border rounded-lg"
            />

            <label htmlFor="password">Password</label>
            <input
                name="password"
                type="password"
                placeholder="password"
                required
                className="px-4 py-2 border rounded-lg"
            />

            <Button
                type="submit"
                className='px-4 py-2 border rounded-lg bg-gray-700 text-white hover:bg-black duration-200'
                label='sign up'
                submittingLabel='signing up...'
            />

            <div>already have an account?{" "}
                <button onClick={handleToggleShowSignUp}>login</button>
            </div>
        </form>
    )
}
