"use client"

import React, { useEffect, useState } from 'react'
import { getCities } from '../actions'
import { City } from '@/types/city'
import CitySelectInput from './CitySelectInput'

const couriers = [
    {
        name: "JNE",
        value: "jne"
    },
    {
        name: "POS Indonesia",
        value: "pos"
    },
    {
        name: "TIKI",
        value: "tiki"
    },
]

interface ShippingCostFormProps {
    handleSubmit: (formData: FormData) => void;
}

export default function ShippingCostForm({ handleSubmit }: ShippingCostFormProps) {
    const [citiesData, setCitiesData] = useState<City[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<unknown>("")

    useEffect(() => {
        async function fetch() {
            setIsLoading(true)
            const data = await getCities()

            if (data.error) {
                setIsLoading(false)
                setError(data.error)
                return
            }

            const cities = await data.data.rajaongkir.results
            setCitiesData(cities)
            setIsLoading(false)
        }
        fetch()
    }, [])

    const handleCheckShippingCost = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        handleSubmit(formData)
    }

    return (
        <form className='flex flex-col gap-6' onSubmit={handleCheckShippingCost}>
            <div className='flex flex-col gap-2'>
                <label htmlFor='origin' className='text-gray-500'>Kota Asal</label>
                <CitySelectInput error={error} isLoading={isLoading} citiesData={citiesData} name="origin" />
            </div>

            <div className='flex flex-col gap-2'>
                <label htmlFor='destination' className='text-gray-500'>Kota Tujuan</label>
                <CitySelectInput error={error} isLoading={isLoading} citiesData={citiesData} name="destination" />
            </div>

            <div className='flex gap-4'>
                <div className='w-1/2 flex flex-col gap-2'>
                    <label htmlFor='weight' className='text-gray-500'>Berat</label>
                    <div className='bg-gray-50 rounded-lg flex overflow-hidden'>
                        <input type="number" placeholder='200' name='weight' id='weight' className='outline-none w-[70%] bg-gray-50 px-4 py-2' />
                        <div className='w-[30%] text-center bg-gray-100 py-2'>Gram</div>
                    </div>
                </div>

                <div className='w-1/2 flex flex-col gap-2'>
                    <label htmlFor='courier' className='text-gray-500'>Kurir</label>
                    <select id='courier' name='courier' className='outline-none bg-gray-50 px-4 py-2 rounded-lg'>
                        {couriers.map((courier) => (
                            <option key={courier.name} value={courier.value}>{courier.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button type="submit" className='px-4 py-2 bg-blue-400 hover:bg-blue-500 duration-200 rounded-xl text-white'>Cek Ongkir</button>
        </form>
    )
}