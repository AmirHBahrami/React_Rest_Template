import React from 'react';

import '../../assets/css/modalbox.css'; // to be re-usable

// props should contain the location of where it should be shown,
// and also children
export default function(props){

  const [height,width]=props.position;

  return(
    <div 
      class='modal-box-div'
      style={{
        top:`${height}px`,
        left:`${width}px`
      }}>
      {props.children}
    </div>
  );

};