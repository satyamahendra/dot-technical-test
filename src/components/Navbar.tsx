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
        path: "/"
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
        const res = await logout()
    }

    return (
        <>
            <h1 className='text-center font-light text-lg'>Ongkir<span className='font-semibold text-blue-600'>in</span></h1>

            <nav className='flex flex-col gap-4 mt-8 ml-4'>
                {navsArray.map((nav, index) =>
                    <Link key={nav.name} href={nav.path} className='flex items-center gap-3'>
                        <div className='text-lg'>{nav.icon}</div>
                        <span>{nav.name}</span>
                    </Link>
                )}
            </nav>

            <div className='bg-gray-50 pl-4 pr-2 mt-auto py-2 flex items-center justify-between'>
                <span className=''>{user?.username}</span>
                <button onClick={handleLogout}>
                    <div className='p-2 bg-white text-lg rounded-xl'>
                        <PiPower />
                    </div>
                </button>

            </div>
        </>
    )
}
