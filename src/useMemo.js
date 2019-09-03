import React,{useState,useMemo} from 'react'
// 解决 重复执行渲染导致的问题
function UseMemoDemo() {
    const [A,setA] = useState('小A在待客状态');
    const [B,setB] = useState('小B在待客状态');
    return (
      <>
        <button onClick={()=>setA(Date.now()+'小A向我们走来')}>小A</button>
        <button onClick={()=>setB(Date.now()+'小B向我们走来')}>小B</button>
        <Child name={A}>{B}</Child>
      </>
    )
}
/*
function Child({name,children}){
    const changeA = (name) => {
      console.log('A来了,A来了')
      return `${name}小红向我们走来`
    }
    const actionA = changeA(name); //当改变B的时候会触发该函数的重复执行
    return (
      <>
        <div>{name}</div>
        <div>{children}</div>
      </>
    )
}
*/
function Child({name,children}){
    const changeA = (name) => {
      console.log('A来了,A来了')
      return `${name}小红向我们走来`
    }
    //第一个参数 函数 执行当前需要执行的函数
    //第二个参数 当name变化的时候才执行changeA
    const actionA = useMemo(()=>changeA(name),[name]); //缓存状态和属性
    return (
      <>
        <div>{name}</div>
        <div>{children}</div>
      </>
    )
}
export default UseMemoDemo;
