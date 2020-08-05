import React, {ChangeEvent, useRef, useState} from 'react';
// import { action } from '@storybook/addon-actions';
import OnOff from '../components/OnOff/OnOff';
import {action} from '@storybook/addon-actions';


export default {
    title: 'input',
    component: OnOff,
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    let [value, setValue] = useState<string>('')

    const onChanges = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue)
    }
    return <> <input onChange={onChanges}
    /> --- {value} </>
}
export const GetValueOfUncontrolledInput = () => {
    let [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <> <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        actual value : {value} </>
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.com'}/>;


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

// export const ControlledCheckBox = () => {
//     const [parentValue, setParentValue] = useState<boolean>(true)
//
//     const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//         debugger
//         setParentValue(e.currentTarget.checked)
//     }
//
//     return <input type='checkbox' value={parentValue} onChange={onChange}/>
// }


export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {

        setParentValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChange}>
        <option value="1">none</option>
        <option value="2">MInsk</option>
        <option value="3">Kiev</option>
    </select>
}
