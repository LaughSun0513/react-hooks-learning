
import React from 'react';
import Buttons from './buttons';
import ShowArea from './showArea';
import {Color} from './context';

function ClickToShowColor(){
  //将Color套在最外层
  return (
    <>
      <Color>
        <ShowArea/>
        <Buttons/>
      </Color>
    </>
  )
}
export default ClickToShowColor
