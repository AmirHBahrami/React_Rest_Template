import React from 'react';
import LoginPart from './LoginPart';
import MenuSwitch from './MenuSwitch';
import LogoDiv from './LogoDiv';

import '../../assets/css/header.css';

export default function(props){

  // read the user from local storage here. (call some function somewhere else that does so).
  //console.log(props.menuActivatorHook);

  return(
    <header class='elevated-light'>
      <MenuSwitch 
        menuActivatorHook={props.menuActivatorHook}
      />
      <LogoDiv />
      <LoginPart userHook={props.userHook}/>
    </header>
  )

}