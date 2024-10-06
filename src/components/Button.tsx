import React from 'react'
import { useFormStatus } from 'react-dom'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type: "submit" | "button" | "reset"
    label: string | React.ReactNode
    submittingLabel: string | React.ReactNode
}

export default function Button({ type, label, submittingLabel, ...props }: ButtonProps) {

    const { pending } = useFormStatus()

    return (
        <button type={type} disabled={pending} {...props} >{pending ? submittingLabel : label}</button>
    )
}
