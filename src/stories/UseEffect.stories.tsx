import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect demo'
}


export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample');

    useEffect(() => {
        console.log('UseEffect every render');
        setInterval(()=>{
            console.log(counter)
            setCounter((state) => state + 1)
        },1000)
    },[])



    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
    </>
}

