import React from 'react';

class Display extends React.Component {
    render(){
        return(
            <div>
                <input type="text" value={this.props.content}/>
            </div>
        );
    }
}

export default Display;