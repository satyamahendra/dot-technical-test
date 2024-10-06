"use client"

import { logout } from '@/actions/auth'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import React from 'react'
import { PiHouse, PiInfo, PiPower } from 'react-icons/pi'

const navsArray = [
    {
        icon: <PiHouse />,
        name: "Home",
        path: "/home"
    },
    {
        icon: <PiInfo />,
        name: "About",
        path: "/about"
    }
]

export default function Navbar() {

    const { user } = useAuth()

    async function handleLogout() {
        await logout()
    }

    return (
        <>
            <div className='sm:flex hidden flex-1 flex-col '>
                <h1 className='text-center font-light text-lg'>Ongkir<span className='font-semibold text-blue-600'>in</span></h1>

                <nav className='flex flex-col gap-2 mt-8'>
                    {navsArray.map((nav) =>
                        <Link key={nav.name} href={nav.path} className='flex items-center gap-3 hover:bg-gray-100 rounded-lg duration-200 px-4 py-2'>
                            <div className='text-lg'>{nav.icon}</div>
                            <span>{nav.name}</span>
                        </Link>
                    )}
                </nav>

                <div className='bg-gray-50 pl-4 pr-2 mt-auto py-2 flex items-center justify-between'>
                    <span>{user?.username}</span>
                    <button onClick={handleLogout}>
                        <div className='p-2 bg-white text-lg rounded-xl'>
                            <PiPower />
                        </div>
                    </button>
                </div>
            </div>

            <div className='sm:hidden fixed bottom-0 left-0 border-t w-screen flex items-center justify-center'>
                {navsArray.map((nav) =>
                    <Link key={nav.name} href={nav.path} className='flex flex-col items-center gap-1.5 hover:bg-gray-100 rounded-lg duration-200 px-4 py-2'>
                        <div className='text-lg'>{nav.icon}</div>
                        <span>{nav.name}</span>
                    </Link>
                )}
                <button onClick={handleLogout} className='flex flex-col items-center gap-1.5 hover:bg-gray-100 rounded-lg duration-200 px-4 py-2'>
                    <div className='w-4 h-4 rounded-full bg-blue-300 text-xs flex items-center justify-center text-white'>{user?.username?.[0]}</div>
                    {user?.username}
                </button>
                <button onClick={handleLogout} className='flex flex-col items-center gap-1.5 hover:bg-gray-100 rounded-lg duration-200 px-4 py-2'>
                    <PiPower className='text-lg ' />
                    Logout
                </button>

            </div>
        </>
    )
}
