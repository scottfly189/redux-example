import React, { useState } from 'react'
import { store } from './store/store'

const initCount = ()=>
{
    return store.getState().count
}

const TestReactRedux:React.FC = () => {
    const [count,setCount] = useState(initCount)
    const [desc] = useState(store.getState().desc)
    store.subscribe(()=>{
        setCount(store.getState().count)
    })
    const clickHandler = ()=> {
        store.dispatch({type:'INCREMENT',payload:1})
    }
    return <>
        <h1>{desc}</h1>
        <hr/>
        <h3>this is value: {count}</h3>
        <button onClick={clickHandler}>+1</button>
    </>
}

export default TestReactRedux