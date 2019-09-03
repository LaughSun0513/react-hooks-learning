import React , { useRef } from 'react';

function RefDemo(){
    const inputEle = useRef(); //作用1:可以选取DOM节点
    const onButtonClick = () => {
        inputEle.current.value = "Hello useRef"
    }
    return (
      <>
        <input ref={inputEle} type="text"/>
        <button onClick={onButtonClick}>在input上添加文字</button>
      </>
    )

}
export default RefDemo;
