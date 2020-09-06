import React, {useMemo, useState} from 'react';

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
