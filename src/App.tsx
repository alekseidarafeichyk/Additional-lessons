import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [switchOn ,setSwitchOn] = useState(false)

    return (
        <div className={'App'}>
        <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
