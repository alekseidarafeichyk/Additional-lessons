import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'Select',
    component: Select,
};

const callback = action('Value changed')


export const WithValue = () => {
    const [value, setValue] = useState('2')
  return <Select value={value}
            onChange={setValue}
            items={[
                {title: 'Minsk', value: '1'},
                {title: 'Kiev', value: '2'},
                {title: 'Moscov', value: '3'}
            ]}/>
}

export const WithOutValue = () => {
    const [value, setValue] = useState(null)
    return <Select value={value}
                   onChange={setValue}
                   items={[
                       {title: 'Minsk', value: '1'},
                       {title: 'Kiev', value: '2'},
                       {title: 'Moscov', value: '3'}
                   ]}/>
}