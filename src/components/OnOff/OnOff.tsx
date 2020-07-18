import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on : boolean
}

function OnOff(props: OnOffPropsType) {

    let nameClassGreen = props.on ? `${s.green}` : ' ';
    let nameClassRed = props.on ? ' ' : `${s.red}`;
return (
    <div>
        <span className={`${s.span} ${nameClassGreen}`}>Onn</span>
        <span className={`${s.span} ${nameClassRed}`}>Off</span>
        <span className={`${s.circle} ${props.on ? nameClassGreen : nameClassRed}`}></span>
    </div>
)
}

export default OnOff