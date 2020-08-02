import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {OnOff} from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
};

export const OnMode = () => <OnOff on={true} onChange={action('on or of clicked')}/>;
export const OffMode = () => <OnOff on={false} onChange={action('on or of clicked')}/>;

export const ModeChanging = () => {
    const [value, SetValue] = useState<boolean>(false)
    return <OnOff on={value} onChange={SetValue}/>
}
