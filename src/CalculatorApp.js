import React from 'react';
import { connect } from 'react-redux';

const CalculatorAppComp = (props) => {
    return (
        <div>
            <h2>Calculator App</h2>
            <input type="number" onChange={props.handleField1Change} />&nbsp;
            <select onClick={props.handleOperationChange}>
                <option value="Addition">+</option>
                <option value="Subtraction">-</option>
                <option value="Multiplication">X</option>
                <option value="Division">/</option>
            </select>&nbsp;<input type="number" onChange={props.handleField2Change} />
            &nbsp;<button onClick={props.handleClick}>=</button>
            &nbsp;{props.result}
        </div>
    );

}

const mapStateToProps = (state) => {
    return ({
        result: state.result
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        handleField1Change: (e) => { dispatch({ type: "SET_FIELD1", value: e.target.value }) },
        handleField2Change: (e) => dispatch({ type: "SET_FIELD2", value: e.target.value }),
        handleClick: () => dispatch({ type: "CALCULATE" }),
        handleOperationChange: (e) => dispatch({ type: "SET_OPS", value: e.target.value })
    })
}

const CalculatorApp = connect(mapStateToProps, mapDispatchToProps)(CalculatorAppComp);

export default CalculatorApp;