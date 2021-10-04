import React from 'react';
import SideNavLink from './SideNavLink';

import '../../../assets/css/sidenav.css';

// to solve a BUG: the bug was that when first the user has entered the
// website for the first time, it would load the animation of "deshow"
// which closes the side-nav. now the component checks if the
// user is clicking on the menu for the first time or not
// and only if it's NOT the first time, the animation is to be loaded...
let timesReloaded=0;

export default function (props){

  // the suffix "func" means it's comming from the parent component
  const {navLinks}=props; // array
  const {menuActive}=props.menuActivatorHook;

  if(menuActive)
    timesReloaded++;

  return (
    <aside
      class={menuActive?'side-nav side-nav-active':
        timesReloaded>0? // the line deciding about the animation loading...
        'side-nav-active side-nav-deactive':
        'side-nav-deactive'}

      // for debugging:
      /*onAnimationStart={()=>{console.log('start')}}
      onAnimationEnd={()=>{console.log('end')}}*/
    >{
      menuActive &&
      <ul class='side-nav-ul'>
        {navLinks.map(link=>
          <li class='side-nav-li'>
              <SideNavLink to={link.to} label={link.label}/>
          </li>
        )}
      </ul>}
    </aside>
  );
};
