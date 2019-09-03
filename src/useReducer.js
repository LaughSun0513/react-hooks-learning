import React,{ useReducer } from 'react';


function ReducerDemo(){
  //解构出要修改的count和dispatch
  const [count,dispatch] = useReducer((state,action)=>{
      switch(action.type){
        case "add":
          return state+1
        case "sub":
          return state-1
        default:
          return state
      }
  },0); //0初始值
  return (
    <>
      <h2>现在的数字是：{count}</h2>
      <button onClick={()=>dispatch({type:'add'})}>加1</button>
      <button onClick={()=>dispatch({type:'sub'})}>减1</button>
    </>
  )
}
export default ReducerDemo;
