import {useState} from 'react';

export default function(){

  const [user,setUser]=useState(null);

  return{
    user,
    setUser
  }

};