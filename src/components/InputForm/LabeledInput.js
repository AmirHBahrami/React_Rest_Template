import React,{Fragment} from 'react';
import Input from './Input';

// a HOC for Input that provides label (in case some fields did't need any label for some reason)
// deals with after/before issue.
export default function(props){

  const {label,isAfter,...rest}=props

  return(
    <div class={props.className?props.className+'-input-div':'input-div'}>
      {isAfter
        &&
          <>
          <Input  {...rest} />
          <label class={rest.className?rest.className+'-label':'label'}>{label}</label>
          </>
        ||
        <>
          <label class={rest.className?rest.className+'-label':'label'}>{label}</label>
          <Input {...rest} />
        </>
      }
    </div>
  );
};