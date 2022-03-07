type ButtonProps = {
    type: string;
}

export function Button(props) {
    return(
        <button classname="button" {...props}>
        </button>
    )
}
