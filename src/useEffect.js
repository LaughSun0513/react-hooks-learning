import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import son from './decorator';
//使用装饰器
console.log(son.havePlay);

//组件Index
function Index(){
  //useEffect实现componentDidMount和componentDidUpdate的集合
  //第二个参数为空数组，和componentWillUnmount说明当组件马上要销毁前，执行return里的函数
  useEffect(()=>{
        console.log(`==== in Page Index`)
        return ()=>{
          console.log(`==== out Page Index`)
        }
  },[])
  return <h2>Page Index</h2>
}
//组件List
function List(){
  useEffect(()=>{
        console.log(`==== in Page List`)
        return ()=>{
          console.log(`==== out Page List`)
        }
  },[])
  return <h2>Page List</h2>
}
function App() {
  const [ count , setCount ] = useState(0);
  //第二个参数为count，表示当count变化时才执行
  useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return () => {
            console.log('====================')
        }
  },[count])
  return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <Router>
              <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list">列表</Link></li>
              </ul>
              <Route path="/" exact component={Index}/>
              <Route path="/list" component={List}/>
            </Router>
        </div>
  );
}

export default App;
