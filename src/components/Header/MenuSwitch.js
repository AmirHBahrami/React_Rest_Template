import React from 'react';

import burgerIcon from '../../assets/img/icons/square.png';
import closeImgSharp from '../../assets/img/icons/square_sharp.png';

// the job of this component is to be inside the header 
// and switch the sidemenu on/off
// the hook is passed from Header <- App
// and will cause a re-render in the App (which in turns make 
// the "Main" component re-render based on it, and render 
// the side-menu if it is active...
export default function(props){

  const {menuActive,setMenuActive}=props.menuActivatorHook;

  return (<div class='header-menu-div'>
      <a 
        href='#' // so that the mouse changes when it reaches the element...
        class='side-nav-closer-a' 
        onClick={()=>{setMenuActive(!menuActive)}}
      >
        <img width='40px' height='40px' src={menuActive==false?burgerIcon:closeImgSharp}/>
      </a>
    </div>);
};