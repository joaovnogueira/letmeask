import { ButtonHTMLAttributes } from 'react'
import 


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
    return(
        <button className="button" {...props}>
        </button>
    )
}
