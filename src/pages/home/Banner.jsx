import React, {useState} from 'react';

const Banner = () => {
    // react state
    const [count, setCount] = useState(0)
    
    const handleCounter = () =>{
        let sum = count + 10;
        setCount(sum)
    }
    return (
        <div>
            <h1>{count}</h1>
            {/* <input onChange={handleSubmit} type="text"/> */}
            <button onClick={handleCounter}>Counter</button>
        </div>
    );
};

export default Banner;