import React, {useState, KeyboardEvent, useEffect} from 'react';
import style from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


type SelectDimychPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const Select = (props: SelectDimychPropsType) => {
    const [active, setActive] = useState<boolean>(false)
    const [howeredElementValue, setHoweredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const howeredItem = props.items.find(i => i.value === howeredElementValue)

    useEffect(() => {
        setHoweredElementValue(props.value)
        }, [ props.value ])

    const toggleItems = () => {
        setActive(!active)
    }

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === howeredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return
                    }

                }
            }
           if (!selectedItem) {
               props.onChange(props.items[0].value)
           }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
           setActive(false)
        }
    }

    return <div className={style.select}
                onKeyUp={onKeyUp}
                tabIndex={0}>
        <span className={style.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
        {active && <div className={style.items}>
            {props.items.map((i, index) => <div className={style.item + ' ' + (howeredItem === i ? style.selected : '')}
                                                onMouseEnter={() => {
                                                    setHoweredElementValue(i.value)
                                                }}
                                                key={index}
                                                onClick={() => {
                                                    onItemClick(i.value)
                                                }}
            >{i.title}
            </div>)}
        </div>}

    </div>
}

// export const Select = (props: SelectPropsType) => {
//     let [mode, setMode] = useState<boolean>(false)
//
//
//     let city = props.items.find(i => props.value === i.value)
//     console.log(city)
//
//     const showOptions = () => {
//         setMode(!mode)
//     }
//
//     const addClassOnMouseEnter = () => {
//     }
//
//     return <div className={style.container}>
//         <div onClick={showOptions}>{city?.title}</div>
//         {
//             mode &&
//             props.items.map((i, index) => {
//                 const selected = props.value === i.value ? `${style.selected}` : '';
//                 return <div className={`${style.option} ${selected}`}
//                             key={index}
//                             onMouseEnter={addClassOnMouseEnter}
//                             onClick={() => {
//                                 props.onChange(i.value)
//                             }}>{i.title}</div>
//             })
//         }
//     </div>
// }