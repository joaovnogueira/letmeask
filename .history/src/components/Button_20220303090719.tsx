export function Button() {
    //let counter = 0;
    const [counter] = useState

    function increment(){
        counter += 1;
        console.log(counter);
    }

    return(
        <button onClick={increment}>{counter}</button>
    )
}

