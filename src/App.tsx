import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import {Select} from './components/Select/Select';

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [switchOn ,setSwitchOn] = useState(false)
    // let [value,setValue] = useState('1')


    let items = [{title:'Minsk',value: '1'},{title:'Kiev',value: '2'},{title:'Moscov',value: '3'}]

    return (
        // <div className={'App'}>
        // <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
        // <Rating value={ratingValue} onClick={setRatingValue}/>
        // </div>
        // <Select value={value}
        //         onChange={ setValue}
        //         items={items}
        // />
        <div>
            <Select value={'1'} onChange={x=>x} items={items}/>
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
