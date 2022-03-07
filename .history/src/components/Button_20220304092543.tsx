import { useState } from "react";

export function Button() {

    function increment(){
        setCounter(counter+1);
    }

    return(
        <button classname="button" >
            {counter}
        </button>
    )
}

