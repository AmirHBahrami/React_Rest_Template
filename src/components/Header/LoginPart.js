import React from 'react';
import defaultUserImg from '../../assets/img/user/user.png';
import {Link} from 'react-router-dom';


function logout(setUser){
  setUser(null);
  localStorage.removeItem('user');
};

export default function (props){

  const {user,setUser}=props.userHook;

  return(
    <div class='header-login-div'>
      {user 
        &&
          <a href='#' onClick={()=>logout(setUser)}>logout</a>
        ||
          <Link to='/login'>login</Link>
      }
      <img 
        class='header-login-img' 
        src={user && user.img? user.img:defaultUserImg} 
        alt=" Icons made by Freepik from 'https://www.flaticon.com/'"
        width='40px'
        height='40px'
      />
    </div>
  );
  
};