import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

import InputForm from './InputForm';
import validateLogin from '../util/validate-login';

import '../assets/css/login.css';

function writeUserToLocalStorage(user){
  const {password,...credentials}=user
  localStorage.setItem('user',JSON.stringify(credentials));
  console.log('written to local storage.');
}

export default function(props){

  const [error,setError]=useState(null);
  const history=useHistory();

  const args=[
    {name:'username',label:'Username',type:'text'},
    {name:'password',label:'Password',type:'password'},
    {name:'keepSignedIn',label:'Keep Me Signed In.',type:'checkbox', isAfter:true},
  ];

  // const [failed,setFailed]=useState(false);


  return (<div class='login-div'>
    { error &&(
      <p class='login-error-p'>{error}</p>
    )}
    <InputForm 
      className='login'
      inputsList={args}
      onSubmitFunc={({username,password,keepSignedIn})=>{

        let user=validateLogin(username,password);
        if(user!=null){
          props.setUser(user);
          if(keepSignedIn)
            writeUserToLocalStorage(user);
          console.log('logged in.');
          history.push('/welcome');
        }
        else
          setError('username or password is not correct.');
        /**/
      }}
    />
  </div>);
};