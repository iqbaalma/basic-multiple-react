import { useState, useEffect } from 'react';

// function Timers() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         setTimeout(() => {
//             setCount((count) => count + 1 );
//         }, 1000)
//     })

//     return <h1>I've rendered {count} times</h1>
// }

// export default Timers;

function Counting() {
    const [count, setCount] = useState(0);
    const [calculate, setCalculate] = useState(0);

    useEffect(() => {
        setCalculate(() => count * 2);
    }, [count]);

    return (
        <>
        <h3>Counting: {count}</h3>
        <button onClick={() => setCount((c) => c + 1)}>+1 && *2</button>
        <h3>Calculate: {calculate}</h3>
        </>
    )
}

export default Counting;