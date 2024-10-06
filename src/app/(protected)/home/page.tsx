"use client"

import React, { useState } from 'react'
import ShippingCostForm from './components/ShippingCostForm'
import { checkShippingCost } from './actions'
import { formatPrice } from '@/app/utils/helpers/formatPrice'
import { PiAirplane, PiMagnifyingGlass, PiX } from 'react-icons/pi'

interface Cost {
    service: string
    description: string
    cost: [{
        value: number,
        etd: string,
        note: string
    }]
}

interface ShippingResult {
    code: string
    name: string
    costs: Cost[]
}

export default function Home() {

    const [shippingResult, setShippingResult] = useState<ShippingResult[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async (formData: FormData) => {
        setShippingResult([])
        setIsLoading(true)
        const result = await checkShippingCost(formData)
        const cost = result.data.rajaongkir.results
        setShippingResult(cost)
        setIsLoading(false)
    }


    return (
        <section className='flex-1 flex flex-col h-full'>
            <ShippingCostForm handleSubmit={handleSubmit} />

            <div className='border-t mt-4 pt-4 w-full'></div>

            {
                isLoading ? (
                    <ul className='flex flex-col gap-4 flex-1 overflow-auto'>
                        {[1, 2, 3].map((item: number) => (
                            <div className='flex px-4 justify-between py-2 animate-pulse bg-gray-100 h-[100px]'>
                            </div>
                        ))}
                    </ul>
                ) : shippingResult?.length > 0 ? (
                    <ul className='flex flex-col gap-4 flex-1 overflow-auto'>
                        {(
                            shippingResult[0].costs.map((cost: Cost) => (
                                <div key={cost.service} className='flex px-4 justify-between py-2 bg-gray-50 h-[100px]'>
                                    <div className='flex flex-col justify-between'>
                                        <p className='font-semibold text-lg'>{cost.service}</p>
                                        <p className='text-gray-400'>{cost.description}</p>
                                    </div>
                                    <div className='flex flex-col justify-between'>
                                        <p className='text-base font-medium'>{formatPrice(cost.cost[0].value)}</p>
                                        <p className='text-gray-500 flex items-center gap-2 ml-auto'><PiAirplane /> {cost.cost[0].etd} hari</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </ul>
                ) : (
                    <div className='flex flex-col flex-1 gap-4 items-center justify-center text-gray-400'>
                        <div className='text-2xl'>{shippingResult ? <PiMagnifyingGlass /> : ":("}</div>
                        <div className=''>{shippingResult ? "Silakan Mulai Mencari" : "Data Tidak Ditemukan"}</div>
                    </div>
                )
            }

        </section>
    )
}
