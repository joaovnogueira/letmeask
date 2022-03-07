type ButtonProps = {
    children?: string;
}

export function Button(props: ButtonProps) {
    return(
        <button>{props.text || 'Default'}</button>
    )
}

