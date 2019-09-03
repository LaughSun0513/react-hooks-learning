import React , { useRef,useState,useEffect } from 'react';

function RefDemo(){
    const [text,setText] = useState("动态绑定state")
    const textRef = useRef(); //作用2:可以保存变量
    useEffect(()=>{
        textRef.current = text; //可以保存变量
        console.log(text);
    })

    return (
      <>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
      </>
    )

}
export default RefDemo;

/*
动态绑定state
useRef2.js:8 动态绑定state1
useRef2.js:8 动态绑定state11
useRef2.js:8 动态绑定state112
useRef2.js:8 动态绑定state1123
useRef2.js:8 动态绑定state11232
useRef2.js:8 动态绑定state112321
useRef2.js:8 动态绑定state1123213
useRef2.js:8 动态绑定state11232131
useRef2.js:8 动态绑定state1123213
useRef2.js:8 动态绑定state112321
useRef2.js:8 动态绑定state11232
useRef2.js:8 动态绑定state1123
useRef2.js:8 动态绑定state112
useRef2.js:8 动态绑定state11
useRef2.js:8 动态绑定state1
useRef2.js:8 动态绑定state
useRef2.js:8 动态绑定stat
useRef2.js:8 动态绑定sta
useRef2.js:8 动态绑定st
useRef2.js:8 动态绑定s
useRef2.js:8 动态绑定
useRef2.js:8 动态绑
useRef2.js:8 动态
useRef2.js:8 动

 */
