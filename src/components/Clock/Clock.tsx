import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {DigitalAnalogView} from './DigitalAnalogView';

type PropsType = {
    mode?: 'digital' | 'analog'
}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    console.log('Clock')

    useEffect(() => {
        console.log('useEffect')

        const intervalId = setInterval(() => {
            console.log('Interval')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    let view;
    switch (props.mode) {
        case 'analog':
           view =  <DigitalAnalogView date={date}/>
            break
        case 'digital':
        view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

