import React, {createContext,useReducer} from 'react';

//目标：通过useReducer实现点击变色效果
export const ColorContext = createContext();

export const UPDATE_COLOR = "UPDATE_COLOR";
export const reducer = (state,action) => {
          switch(action.type){
              case UPDATE_COLOR:
                return action.color
              default:
                return state
          }
}

// 父组件
export const Color = props => {
    const [color,dispatch] = useReducer(reducer,"blue") //1 设定初始值解构出dispatch
    //2 传递初始值和dispatch
    return (
      <ColorContext.Provider value={{color,dispatch}}>
        {props.children}
      </ColorContext.Provider>
    )
}
