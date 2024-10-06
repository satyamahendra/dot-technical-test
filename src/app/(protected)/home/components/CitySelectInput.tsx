import { City } from '@/types/city';
import React from 'react'

interface CitySelectInputProps {
    name: string;
    isLoading: boolean;
    error: unknown;
    citiesData: City[]
}

export default function CitySelectInput({ name, isLoading, error, citiesData }: CitySelectInputProps) {

    return (
        <select id={name} name={name} className='outline-none bg-gray-50 px-4 py-2 rounded-lg'>
            {
                isLoading ? (
                    <option value="" className='text-gray-300 disabled text-center'>Loading...</option>
                ) : (
                    error ? (
                        <option value="" className='text-gray-300 disabled text-center'>Something went wrong</option>
                    ) : (
                        citiesData.map((city: City) => (
                            <option key={city.city_id} value={city.city_id}>{city.type} {city.city_name}</option>
                        ))
                    )
                )

            }
        </select>
    )

}

