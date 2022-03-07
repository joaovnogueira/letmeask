export function Button() {
    //let counter = 0;
    const <div counter=""></div>

    function increment(){
        counter += 1;
        console.log(counter);
    }

    return(
        <button onClick={increment}>{counter}</button>
    )
}

