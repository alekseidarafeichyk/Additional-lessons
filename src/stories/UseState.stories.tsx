import React, {useEffect, useMemo, useState} from 'react';

export default  {
    title: 'UseState demo'
}


 function generateData() {
    console.log('genereateData')
    return 1;
}

export const Example1 =  () => {
    console.log('Example')

    const [counter, setCounter] = useState(generateData);


    return <>
        <button onClick={() => {setCounter((state : number) => state + 1)}}>+</button>
        {counter}
            </>
}

export const SimpleExample =  () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    useEffect(() =>{
        console.log('useEffect every render')
        document.title = counter.toString();
    })
    useEffect(() =>{
        console.log('useEffect only first render (component DidMount)')
        document.title = counter.toString();
    }, [])
    useEffect(() =>{
        console.log('useEffect  first render and every counter change')
        document.title = counter.toString();
    }, [counter])


    return <>
        <button onClick={() => {setFake((state : number) => state + 1)}}>fake+</button>
        <button onClick={() => {setCounter((state : number) => counter + 1)}}>counter+</button>
        {counter} {fake}
    </>
}
