import React from 'react';
import ModalBox from './ModalBox';

import '../../assets/css/modaltext.css';

// HOCs ModalBox
export default function(props){

  return(
    <ModalBox
      position={props.position}
      children={<p class='modal-box-p'>{props.text}</p>}
    />
  )

};