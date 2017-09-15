import React from 'react';

class Opkey extends React.Component {
    render(){
        return(
            <div>
                <button> {this.props.op} </button>
            </div>
        );
    }
}

export default Opkey;