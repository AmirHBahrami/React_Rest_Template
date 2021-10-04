import React,{useState} from 'react';
import {Link,useRouteMatch} from 'react-router-dom';
 
export default function ({to,label}){

  let active=useRouteMatch(to);
  //console.log(to,active);

  return (
    <div class={active?'side-elem-active':'side-elem'}>
      <Link to={to}>{label || 'link'}</Link>
    </div>
  )
};