import React,{useState,createContext,useContext} from 'react';

const CountContext = createContext(); //1

function Parent(){
    const [ count , setCount ] = useState(0);

    return (
      <div>
          <h2>Parent Component</h2>
          <p>You clicked {count} times</p>
          <button onClick={()=>{setCount(count+1)}}>click me</button>
          {/*
              2  CountContext.Provider
              3  value={count}  传值给子组件
            */
          }
          <CountContext.Provider value={count}>
          {/*
              5 放置子组件
            */
          }
              <Son/>
          </CountContext.Provider>
      </div>

  )
}
function Son(){
  //4 useContext(父组件)
  let count = useContext(CountContext);
  return (
    <>
      <h2>Son Component</h2>
      <h2>Son接收到的值：{count}</h2>
    </>
  )
}
export default Parent;
