import React,{useState} from 'react';
import InputForm from './InputForm';
import validateLogin from '../util/validate-login';

function writeUserToLocalStorage(user){

  localStorage.setItem('user',JSON.stringify(user));

}

export default function(props){

  const args=[
    {name:'username',label:'Username',type:'text'},
    {name:'password',label:'Password',type:'password'},
    {name:'keepSignedIn',label:'Keep Me Signed In.',type:'checkbox', isAfter:true},
  ];

  const [failed,setFailed]=useState(false);

  return (<div class='login-div'>
    <InputForm 
      className='login'
      inputsList={args}
      onSubmitFunc={(forwardedState)=>{
        const {username,password,keepSignedIn}=forwardedState;
        let user=validateLogin(username,password);
        if(user!=null){
          props.setUser(user);

          if(keepSignedIn){
            console.log(keepSignedIn)
            writeUserToLocalStorage(user);
          }

        }
        else
          console.log('fuck!');
        /**/
      }}
    />
  </div>);
};