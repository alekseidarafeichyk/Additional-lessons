import React from 'react';

type ItemType = {
    title:string
    value: any
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange:(value: boolean) => void
    items: ItemType[]
    onClick: (value:any) =>void
}

export function Accordion(props: AccordionPropsType) {
    return (<div>
            <AccordionTitle title={props.title} onChange={() => {props.onChange(!props.collapsed)}}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/> }
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=> void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{props.title}</h3>
}

type AccordionBodyPropsType = {
    items : ItemType[]
    onClick: (value:any) =>void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item,index) => <li key={index} onClick={()=>{props.onClick(item.value)}}>{item.title}</li>)}
        </ul>
    )
}
