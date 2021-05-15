import React from "react";

class Buttons extends React.Component {
    
    
    render () {
        return (
            <div>
                <button id="bsort" className="button" onClick={this.props.sort}>Sort</button>
                <button id="bshuffle" className="button" onClick={this.props.shuffle}>Shuffle</button>
            </div>
        );
    }
}

export default Buttons;