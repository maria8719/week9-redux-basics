import {useState} from "react";

export default function CounterNoRedux() {

    const [count, setCounter] = useState(0);

    const increment = () => {
        setCounter(count + 1 )
    }

    const decrement = () => {
        setCounter(count - 1 )
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </>
    )
}