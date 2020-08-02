import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean)=> void
}

export function OnOff(props: OnOffPropsType) {



    let nameClassGreen = props.on ? `${s.green}` : ' ';
    let nameClassRed = props.on ? ' ' : `${s.red}`;


    return (
        <div>
            <span className={`${s.span} ${nameClassGreen}`}
                  onClick={() => {props.onChange(true)}}
            >Onn</span>
            <span className={`${s.span} ${nameClassRed}`}
                  onClick={() => {props.onChange(false)}}
            >Off</span>
            <span className={`${s.circle} ${props.on ? nameClassGreen : nameClassRed}`}></span>
        </div>
    )
}

export default OnOff