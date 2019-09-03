import React, {createContext} from 'react';

//目标：通过createContext建立全局context，将值下发到子组件

export const ColorContext = createContext(); //1

// 父组件Color
export const Color = props => {
    let initState = {  //2 设定初始值
      color:"red"
    }
    return (
      <ColorContext.Provider value={initState}>
        {props.children}
      </ColorContext.Provider>
    )
}
