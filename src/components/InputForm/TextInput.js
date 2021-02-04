import React from 'react';
import LabeledInput from './Input';

// props: name, defaultValue?, onChangeFunc, className?
// the only reason it's here is to decide if the element is
// a textarea
export default function(props){


  const {name,label,onInputFunc,defaultValue,className,multiline}=props;

  return(<div class={className?className+'-input-div':'input-div'}>
    {multiline &&
      (<textarea 
        value={defaultValue || ''}
        id={name}
        name={name}
        onChange={onInputFunc}
        class={className?className+'-textarea':'textarea'}
        cols='20'
        rows='10'
      >{defaultValue}</textarea>)
    ||
      (<LabeledInput
        type='text'
        defaultValue={defaultValue || ''}
        onInputFunc={onInputFunc} // fwd
        name={name}
        id={name}
        class={className?className+'-text-input':'text-input'}
        label={label?label:name}
      />)
    }
  </div>)
};