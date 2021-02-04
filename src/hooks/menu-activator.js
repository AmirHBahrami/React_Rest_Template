import {useState} from 'react';

export default function(){

  const [menuActive,setMenuActive]=useState(false);

  return{
    menuActive,
    setMenuActive
  }

};