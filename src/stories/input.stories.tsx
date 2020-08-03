import React, {ChangeEvent, useRef, useState} from 'react';
// import { action } from '@storybook/addon-actions';
import OnOff from '../components/OnOff/OnOff';


export default {
  title: 'input',
  component: OnOff,
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
  let [value,setValue] = useState<string>('')

  const onChanges = (e:ChangeEvent<HTMLInputElement>)=>{
    const actualValue = e.currentTarget.value;
    setValue(actualValue)
  }
  return <> <input onChange={onChanges}
  /> --- {value} </>
}


export const GetValueOfUncontrolledInput = () => {
  let [value,setValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value)
  }

  return <> <input ref={inputRef}/> <button onClick={save}>Save</button>actual value : {value} </>
}
export const ControlledInputWithFixedValue = () => <input value={'it-incubator.com'}/>;
