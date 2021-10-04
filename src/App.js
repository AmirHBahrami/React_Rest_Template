import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import menuActivatorH from './hooks/menu-activator';
import userH from './hooks/user-hook';

import './App.css';
import './assets/css/common.css';

function App() {

  const userHook=userH();
  const menuActivatorHook=menuActivatorH();

  // note: do not use localStorage.key(); bc the key remains true
  // but here, we're inspecting for the value. so basically the key
  // always exist bc of the prev interactions with localStorage, but
  // rather the value is null, if there's no value set (or it's unset).
  // OR use "localStorage.remove" to remove the key as well.
  if(!userHook.user && localStorage.getItem('user')){
    console.log('user!');
    userHook.setUser(JSON.parse(localStorage.getItem('user')));
  }

  return (
    <Router>
      <Header userHook={userHook} menuActivatorHook={menuActivatorHook}/>
      <Main userHook={userHook} menuActivatorHook={menuActivatorHook}/>
    </Router>
  );
}

export default App;
