import React from 'react';
import {Route,Switch} from 'react-router-dom';
import SideNavbar from './SideNavbar';
import Login from '../Login';

import '../../assets/css/main.css';

const navLinks=[
  {to:'/search',label:'search'},
  {to:'/add',label:'add'},
  {to:'/remove',label:'remove'},
];

export default function (props){

  // NOTE: side-navbar will be rendered, but only not displayed, this is 
  // to make sure css-animations work correctly
  return (
    <main>
      <SideNavbar menuActivatorHook={props.menuActivatorHook} navLinks={navLinks}/>
      <Switch>
        <Route exact path='/login'>
          <Login setUser={props.userHook.setUser}/>
        </Route>
        <Route exact path='/register'>
          <div class='main-content'><p>register, bitch!</p></div>
        </Route>
      </Switch>
    </main>
  );
};