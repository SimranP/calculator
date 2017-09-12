import React from 'react';

class Operations extends React.Component {

    constructor(){
        super();
        this.state = {ops: "Addition"}
        
    }

    handleOperationChange = (e) => {
        this.setState({ops:e.target.value});
    }

    render() {
        return (
            <select onClick = {this.handleOperationChange}>
                <option value="Addition">+</option>
                <option value="Subtraction">-</option>
            </select>
        );
    }

    doOperation(f1, f2){
        return operations[this.state.ops](f1 , f2);
    }

}


let operations = {
    Addition: (a,b) => {
        return a+b;
    },
    Subtraction: (a,b) => {
        return a-b;
    }
}

export default Operations;