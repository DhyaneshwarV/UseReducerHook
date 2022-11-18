import React, { useReducer } from 'react'

const UseReducerHook = () => {
    const reducer=(state,action)=>{
        switch(action.type){
            case "Increment":
                return {...state,count:state.count+action.value}
            case "ShowText":
                return {...state,showText:!state.showText}
            default:
                return state
        }
    }
    const[state,dispatch]=useReducer(reducer,{count:0,showText:false})
  return (
    <div>
        <h1>UseReducerHook</h1>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:"Increment",value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:"Increment",value:-1})}>Decrement</button>
        <button onClick={()=>dispatch({type:"ShowText"})}>ShowText</button>
        {state.showText&&<h1>This is an text</h1>}
    </div>
  )
}

export default UseReducerHook
