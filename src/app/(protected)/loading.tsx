import React from 'react'
import { PiCircleDashed } from 'react-icons/pi'

export default function Loading() {
    return (
        <div className='w-full h-full flex items-center justify-center'><PiCircleDashed className='animate-spin' /></div>
    )
}
