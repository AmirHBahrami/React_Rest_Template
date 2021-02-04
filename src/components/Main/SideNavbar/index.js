import React,{useState} from 'react';
import SideNavLink from './SideNavLink';
import {useRouteMatch} from 'react-router-dom';

import '../../../assets/css/sidenav.css';

export default function (props){

  // the suffix "func" means it's comming from the parent component
  const {navLinks}=props; // array
  const {path}=useRouteMatch();
  const {menuActive}=props.menuActivatorHook;

  return (<aside class={menuActive?'side-nav side-nav-active':'side-nav'}>
    <ul class='side-nav-ul'>
      {navLinks.map(link=>
        <li class='side-nav-li'>
            <SideNavLink to={link.to} label={link.label} active={link.to==path}/>
        </li>
      )}

    </ul>
  </aside>)
}