import React, {useState} from 'react';

export default  {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}



const UsersSecret = (props: {users : Array<string>}) => {
    console.log('Users')
    return <div>{
        props.users.map((u,i) => {
            return <div key={i}>{u}</div>})
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 =  () => {
    console.log('Example')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () =>{
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={() => {
            addUser()
        }
        }>add users</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
            </>
}
