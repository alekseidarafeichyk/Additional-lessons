import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode event fired')
const onClickcallback = action('some item on clicked')

export const CollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickcallback}/>;
export const UnCollapsedMode = () => <Accordion title={'Users'} collapsed={false} onChange={callback} items={[{title:'Lesha',value:1},{title:'Petya',value:2},{title:'Valera',value:3}]} onClick={onClickcallback}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={'Users'}
                      collapsed={value}
                      onChange={setValue}
                      items={[{title:'Lesha',value:1},{title:'Petya',value:2},{title:'Valera',value:3}]}
                      onClick={(id) => {
                        alert(`user id : ${id}`)
                      }
                      }/>;
}
