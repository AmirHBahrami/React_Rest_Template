import React from 'react';

export default function(props){

  const{name,className,checked,setChecked,type,onChange}=props;

  return(
    <div class={className?className+'-input-div':'input-div'}>
      <input 
        onInput={onChangeFunc}
        type='checkbox'
        onInput={onInputFunc}
      />
      <label for={name}>name</label>
    </div>
  );
}