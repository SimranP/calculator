import React from 'react';
import Display from './Display';
import Keypad from './Keypad';


class CalculatorApp extends React.Component {

  constructor(){
    super();
    this.state = {
      content:"0",
      num1:"",
      num2:"",
      op: ""
    }
  }

  handleNumKeyClick(e){
    let {value} = e.target; 
    if(this.state.op){
      this.setState({num1: this.state.num1 + value})
    }else{
      this.setState({num2: this.state.num2 + value})
    }
  }

  render() {
    return (
      <div>
        <Display content={this.state.num1 + this.state.op + this.state.num2}/>
        <Keypad numHandler={this.handleNumKeyClick.bind(this)}/>
      </div>
    )
  }
}

export default CalculatorApp;
