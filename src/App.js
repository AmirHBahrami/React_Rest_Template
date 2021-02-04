import React,{useEffect} from 'react';
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

  return (
    <Router>
      <Header userHook={userHook} menuActivatorHook={menuActivatorHook}/>
      <Main userHook={userHook} menuActivatorHook={menuActivatorHook}/>
    </Router>
  );
}

export default App;
