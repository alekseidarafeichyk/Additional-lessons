import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion, AccordionSecret} from './AccordionSecret';

export default {
    title: 'Accordion',
    component: AccordionSecret,
};

const callback = action('accordion mode event fired')
const onClickcallback = action('some item on clicked')

export const CollapsedMode = () => <AccordionSecret title={'Menu'} collapsed={true} onChange={callback} items={[]} onClick={onClickcallback}/>;
export const UnCollapsedMode = () => <AccordionSecret title={'Users'} collapsed={false} onChange={callback} items={[{title:'Lesha',value:1},{title:'Petya',value:2},{title:'Valera',value:3}]} onClick={onClickcallback}/>;

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
