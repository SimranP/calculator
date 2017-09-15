import React from 'react';
import Numkey from './Numkey';
import Opkey from './Opkey';

class Keypad extends React.Component {
        render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>< Numkey handler={this.props.numHandler} num = {7}  /></td>
                        <td>< Numkey handler={this.props.numHandler}  num = {8}  /></td>
                        <td>< Numkey handler={this.props.numHandler} num = {9}  /></td>
                        <td>< Opkey handler={this.props.opHandler} op = '/'  /></td>
                    </tr>
                    <tr>
                        <td>< Numkey handler={this.props.numHandler} num = {4}  /></td>
                        <td>< Numkey handler={this.props.numHandler} num = {5}  /></td>
                        <td>< Numkey handler={this.props.numHandler} num = {6}  /></td>
                        <td>< Opkey handler={this.props.opHandler} op = 'x'  /></td>
                    </tr>
                    <tr>
                        <td>< Numkey handler={this.props.numHandler} num = {1}  /></td>
                        <td>< Numkey handler={this.props.numHandler} num = {2}  /></td>
                        <td>< Numkey handler={this.props.numHandler} num = {3}  /></td>
                        <td>< Opkey handler={this.props.opHandler} op = '-'  /></td>
                    </tr>
                    <tr>
                        <td>< Numkey handler={this.props.numHandler} num = {0}  /></td>
                        <td>< Opkey handler={this.props.opHandler} op = 'C'  /></td>
                        <td>< Opkey handler={this.props.opHandler} op = '='  /></td>
                        <td>< Opkey handler={this.props.opHandler} op = '+'  /></td>
                    </tr>
                    
                </table>
            </div>
        );
    }
}


export default Keypad;