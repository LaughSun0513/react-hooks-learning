import React, { useRef,useState,useEffect } from 'react';

const MyInput = React.forwardRef(Input); // 3 forwardRef监管Input组件

function UseForwardRef() { 
    const [name, setName] = useState('Yux'); 
    const nameRef = useRef(); // 2 设置父组件的初始值

    useEffect(() => { 
        // 6 可以通过nameRef操作子组件中的input
        nameRef.current.focus();
    }, [])
    
    // 4 使用MyInput，并将父组件的值下发 
    return <MyInput type="text" value={name} ref={nameRef} onChange={e =>setName(e.target.value)}/>
}

// 子组件 1  // 5 ref为第二个参数 绑定子组件input
function Input({ type,value,onChange},ref) { 
    return <input type={type} value={value} onChange={onChange} ref={ref}/>
}

export default UseForwardRef;