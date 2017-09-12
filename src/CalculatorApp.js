import React from 'react';
import Operations from './Operations';

class CalculatorApp extends React.Component {

    constructor() {
        super();
        this.state = {
            field1: 0,
            field2: 0,
            result: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleField1Change = this.handleField1Change.bind(this);
        this.handleField2Change = this.handleField2Change.bind(this);

    }

    handleClick = () => {
        let result = this.ops.doOperation(parseInt(this.state.field1), parseInt(this.state.field2));
        this.setState({ result });
    }

    handleField1Change = (e) => {
        this.setState({field1 : e.target.value});
    }

    handleField2Change = (e) => {
        this.setState({field2 : e.target.value});
    }

    render() {
        return (
            <div>
                <h2>Calculator App</h2>
                <input type="text" onChange={this.handleField1Change} />&nbsp;
               <Operations ref={input => this.ops = input} func1={this.func1}/>&nbsp;<input type="text" onChange={this.handleField2Change} />
                &nbsp;<button onClick={this.handleClick}>=</button>
                &nbsp;{this.state.result}
            </div>
        );
    }
}

export default CalculatorApp;