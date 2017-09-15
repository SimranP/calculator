import React from 'react';

class Opkey extends React.Component {
    render(){
        return(
            <div>
                <button value={this.props.op} onClick={this.props.handler}> {this.props.op} </button>
            </div>
        );
    }
}

export default Opkey;