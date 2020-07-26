import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [switchOn ,setSwitchOn] = useState(false)

    return (
        <div className={'App'}>
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
