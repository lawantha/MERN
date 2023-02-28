import React, { useState } from "react";

function counter() {

    let [number, setNumber] = useState(0);

    function increment() {
        setNumber(++number)
    }

    return (
        <div>
            <h1>counter = {number}</h1>
            <button onClick={e => increment()}>increment</button>
        </div>
    )
}

export default counter;