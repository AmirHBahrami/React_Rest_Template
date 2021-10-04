import React from 'react';

// this element will only be wrapped and is useless if used alone.
// NOTE that in case of "textarea" it's not used (see ./TextInput.js)
// also the label is provided from outside since some labels shuold
// be placed after the input in DOM.
export default function(props){

  const{name,onInputFunc,type,className,defaultVal}=props;

  return(
    <input 
      onInput={onInputFunc} // will be passed an 'event' object
      type={type}
      class={className?`${className}-${type}-input`:type+'-input'}
      value={defaultVal?defaultVal:null}
      name={name}
    />
  )

};