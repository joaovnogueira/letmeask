import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HT>

export function Button(props: ButtonProps) {
    return(
        <button className="button" {...props}>
        </button>
    )
}
