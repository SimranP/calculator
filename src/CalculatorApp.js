import React from 'react';
import Display from './Display';
import Keypad from './Keypad';


class CalculatorApp extends React.Component {

  constructor() {
    super();
    this.state = {
      num1: "",
      num2: "",
      op: ""
    }
  }

  handleOpKeyClick(e) {
    if(e.target.value === '=' && this.state.op){
      let result = this.operations[this.state.op](Number(this.state.num1), Number(this.state.num2));
      this.setState({num1: result.toString(), num2: '', op: ''});
      return;
    }
    if(e.target.value === 'C'){
      this.setState({num1: '', num2: '', op: ''});
      return;
    }
    this.setState({ op: e.target.value })
  }

  operations = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    'x': (x, y) => x * y,
    '/': (x, y) => x / y
  }

  handleNumKeyClick(e) {
    let { value } = e.target;
    if (this.state.op) {
      this.setState({ num2: this.state.num2 + value })
    } else {
      this.setState({ num1: this.state.num1 + value })
    }
  }

  getContent() {
    return this.state.num1 + this.state.op + this.state.num2;
  }

  render() {
    return (
      <div >
        <Display content={this.getContent()} />
        <Keypad numHandler={this.handleNumKeyClick.bind(this)} opHandler={this.handleOpKeyClick.bind(this)} />
      </div>
    )
  }
}

export default CalculatorApp;
