import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode event fired')

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={callback}/>;
export const UnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} onChange={callback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'} collapsed={value} onChange={setValue}/>;
}
