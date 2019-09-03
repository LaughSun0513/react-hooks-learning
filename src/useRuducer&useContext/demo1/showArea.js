
import React,{ useContext } from 'react';
import { ColorContext } from './context';

function ShowArea(){
  //子组件
  const { color } = useContext(ColorContext); //取出父组件传下来的值
  return  <h5 style={{color:color}}>我的颜色是 {color}</h5>
}
export default ShowArea;
