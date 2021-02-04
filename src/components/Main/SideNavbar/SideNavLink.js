import React,{useState} from 'react';
import {Link} from 'react-router-dom';

export default function (props){

  return (
    <div class={props.active?'side-elem-active':'side-elem'}>
      <Link to={props.to}>{props.label || 'link'}</Link>
    </div>
  )
};