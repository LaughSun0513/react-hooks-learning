
import React from 'react';
import Buttons from './buttons';
import ShowArea from './showArea';
import {Color} from './context';

function ClickToShowColor(){
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
