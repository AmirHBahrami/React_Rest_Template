import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextModal from '../TextModal/';

import logoImg from '../../assets/img/icons/Faravahar-Gold.svg';

// why a component in itself:
// if you hold your mouse on the log, a modal text shows up
// explaining what it is and why I used it :)
export default function(props){

  const [modalText,setModalText]=useState(null);
  const history=useHistory();
  let modalTimeout=null;

  return(
    <div class='header-logo-div'>
      <div class='header-logo-img-div'>
        <a href='#'
          onMouseEnter={(e)=>{
            modalTimeout=setTimeout(()=>{
              setModalText(
                <TextModal event={e}
                  text='Farvahar is the Symbol of Zoroastrianism and my all-time favourite!'/>
                );
            },500);
          }}
          onMouseLeave={()=>{
            clearTimeout(modalTimeout); // no need to clear it , for it causes re-render
            setModalText(null);
          }}
          onClick={()=>{
            history.replace('/');
          }}
        >
          <img
            src={logoImg}
            width='100px'
            height='40px'
            alt="https://commons.wikimedia.org/wiki/File:Faravahar-Gold.svg"
            />
        </a>
        {modalText}
      </div>
      <p>CRUD-Template</p>
    </div>
  )
};
