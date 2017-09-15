import React from 'react';

class Numkey extends React.Component {
    render(){
        return(
            <div>
                <button onClick={this.props.handler} value={this.props.num} > {this.props.num} </button>
            </div>
        );
    }
}

export default Numkey;