type ButtonProps = {
    children?: string;
}

export function Button(props: ButtonProps) {
    return(
        <button>{<props className="children"></props> || 'Default'}</button>
    )
}

