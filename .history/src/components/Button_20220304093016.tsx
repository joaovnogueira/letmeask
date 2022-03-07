type ButtonProps = {
    type: string;
}

export function Button(props: ButtonProps) {
    return(
        <button classname="button" {...props}>
        </button>
    )
}
