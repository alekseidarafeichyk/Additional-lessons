import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UcontrolledAccordion/UnControlledAccordion';
import UncontrolledRating from './components/UcontrolledRating/UncontrolledRating';

function App() {

    return (
        <div className={'App'}>
            {/*<Accordion title={'Menu'} collapsed={false}/>*/}
            {/*<Accordion title={'Users'} collapsed={true}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff/>*/}
            {/*<OnOff/>*/}
            {/*<UncontrolledAccordion title={'Menu'}/>*/}
            {/*<UncontrolledAccordion title={'Users'}/>*/}
            <UncontrolledRating />
        </div>
    );
}

function PageTitle(props: any) {
    return <h1>{props.title}</h1>
}

export default App;
