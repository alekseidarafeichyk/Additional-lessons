import React, {useState} from 'react';
import s from './UnControlledOnOff.module.css'

type OnOffPropsType = {
    onChange : (on: boolean) => void
    defaultOn? : boolean
}

export function UncontrolledOnOff(props: OnOffPropsType) {

    let [mode,setMode] = useState<boolean>(props.defaultOn ? props.defaultOn : false)


    let nameClassGreen = mode ? `${s.green}` : ' ';
    let nameClassRed = mode? ' ' : `${s.red}`;

    const onClicked = () => {
        setMode(true)
        props.onChange(true)
    }

    const offClicked = () => {
        setMode(false)
        props.onChange(false)
    }
    return (
        <div>
            <span className={`${s.span} ${nameClassGreen}`}
                  onClick={onClicked}
            >Onn</span>
            <span className={`${s.span} ${nameClassRed}`}
                  onClick={offClicked}
            >Off</span>
            <span className={`${s.circle} ${mode ? nameClassGreen : nameClassRed}`}></span>
        </div>
    )
}
