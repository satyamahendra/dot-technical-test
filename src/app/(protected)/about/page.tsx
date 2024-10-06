import React from 'react'

const techstack = ['next js 14', "lucia auth", "tailwind", "vercel", "vercel postgre"]


export default function About() {
    return (
        <div className='text-center'>
            <h1>About</h1>

            <div className='mt-4'>Ida Bagus Satya Mahendra</div>
            <div>DOT Frontend Technical Test</div>
            <div>Malang, Indonesia - 6 October 2024</div>
            <a href='https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/' className='text-blue-400' target='_blank'>linkedin</a>

            <ul className='flex flex-col mt-8'>
                {techstack.map(tt => <li key={tt}>{tt}</li>)}
            </ul>
        </div>
    )
}
