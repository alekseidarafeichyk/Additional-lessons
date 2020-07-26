import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
}

function OnOff(props: OnOffPropsType) {

    let [mode,setMode] = useState<boolean>(false)


    let nameClassGreen = mode ? `${s.green}` : ' ';
    let nameClassRed = mode? ' ' : `${s.red}`;

    const changeMode = () => {
        setMode(!mode)
    }
    return (
        <div>
            <span className={`${s.span} ${nameClassGreen}`}
                  onClick={() => {setMode(true)}}
            >Onn</span>
            <span className={`${s.span} ${nameClassRed}`}
                  onClick={() => {setMode(false)}}
            >Off</span>
            <span className={`${s.circle} ${mode ? nameClassGreen : nameClassRed}`}></span>
        </div>
    )
}

export default OnOff