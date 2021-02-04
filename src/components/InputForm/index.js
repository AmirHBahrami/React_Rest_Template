import React from 'react';
import LabeledInput from './LabeledInput';
import TextInput from './TextInput';

// note that only text input, checkbox, and radio are supported at the time being,
// if you needed to add new types of input, add it as a new element in the local 
// directory
// Also this is a class since the number of state members is dynamic, and 
// via useState it's not possible to manage.
// dynamic setState with function : useState({}) >> oldState=state; setState({...oldState,[name]:val});
export default class extends React.Component{
  
  state={};

  setValue=(e)=>{

    // distinguishing the different types
    let value;
    if(e.target.type=='checkbox')
      value=e.target.checked
    else 
      value=e.target.value

    this.setState({
      [e.target.name]:value
    });
    console.log(value)
  }

  render(){

    // className will be expanded, as in className+'-input-div'
    const {onSubmitFunc,inputsList,className}=this.props; // inputsList: [ {}, {},... ] {}: type, name, defualtVal, className

    return(
      <form 
        class={className?className+'-form':'form'}
        onSubmit={(e)=>{
          e.preventDefault();
          onSubmitFunc(this.state); // event though it's a bit bit...
        }}
      >
        {inputsList.map(i=>{
            return <LabeledInput onInputFunc={this.setValue} {...i} className={className || 'form'}/>
        })}
        <input type='submit' class={className?className+'-submit':'form-submit'}/>
      </form>

    )
  }
}