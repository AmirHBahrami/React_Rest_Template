import React from 'react';
import TextModal from './TextModal';

/* 
  only HOCs the TextModal with the position of the event
  NOTE that the event should be given in the props
*/
export default function (props){
  
  let {x,y}=props.event;
  console.log(`position:(${x}|${y})`); // somehow this is even irrelevant...

  return <TextModal
    position={[x,y]}
    text={props.text}
  />
}