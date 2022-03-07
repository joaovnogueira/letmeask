export function Button() {
    let counter = 0;

    function increment(){
        counter += 1;
        console.log
    }

    return(
        <button onClick={increment}>0</button>
    )
}

