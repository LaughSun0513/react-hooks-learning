
import React,{ useContext } from 'react';
import { ColorContext } from './context';

function Buttons(){
  const { dispatch } = useContext(ColorContext); //接收disptach
  return <>
    <button onClick={()=>dispatch({type:"UPDATE_COLOR",color:"red"})}>红色</button>
    <button onClick={()=>dispatch({type:"UPDATE_COLOR",color:"green"})}>绿色</button>
  </>
}
export default Buttons;
