import React from 'react';
import {Route,Switch} from 'react-router-dom';
import SideNavbar from './SideNavbar';
import Login from '../Login';

import '../../assets/css/main.css';

const navLinks=[
  {to:'/overview',label:'overview'},
  {to:'/add',label:'add'},
  {to:'/search',label:'search'},
];


export default function ({menuActivatorHook,userHook}){

  // NOTE: side-navbar will be rendered, but only not displayed, this is
  // to make sure css-animations work correctly
  return (
    <main>
      <SideNavbar menuActivatorHook={menuActivatorHook} navLinks={navLinks}/>
      <Switch>
        <Route exact path='/login'>
          <Login setUser={userHook.setUser}/>
        </Route>
        <Route exact path='/register'>
          <div class='main-content'><p>register, bitch!</p></div>
        </Route>
        <Route exact path='/welcome'>
          <div class='main-content'><p>welcome, {userHook.user?userHook.user.username:"my dude"}!</p></div>
        </Route>
      </Switch>
    </main>
  );
};
