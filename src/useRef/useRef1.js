import React , { useRef } from 'react';

function UseRef1(){
    const inputEle = useRef(); //作用1:可以选取DOM节点,这里是通过button的点击去修改input的值
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
export default UseRef1;
