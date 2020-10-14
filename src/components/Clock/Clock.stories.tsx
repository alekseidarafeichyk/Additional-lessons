import React from 'react';
import {Clock} from './Clock';

export default  {
    title: 'Clock demo',
    component: Clock,
}

export const BaseDigitalExample = (props: any) => {
    return <Clock mode={'analog'}/>
}
export const BaseAnalogExample = (props: any) => {
    return <Clock mode={'digital'}/>
}
