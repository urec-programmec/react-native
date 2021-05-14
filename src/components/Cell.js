import React from "react";

class Cell extends React.Component {

    render () {
        return (
            <div className="cell" id={this.props.id}></div>
        );
    }
}

export default Cell;