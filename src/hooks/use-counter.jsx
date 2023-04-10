import { useEffect, useState } from 'react';

const useCounter = (initialCount) => {

    const [counter, setCounter] = useState(initialCount);

    useEffect(() => {
        console.log(initialCount);
    }, [initialCount]);

    const increment = () => {
        setCounter(counter + 1);
    }

    return {
        increment,
        counter
    };

}

export default useCounter;
