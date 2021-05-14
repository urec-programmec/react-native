import React from "react";
import Cell from "./Cell";

class Row extends React.Component {
    
    width = this.props.width;
    id = this.props.id;
    state = {
        data: []
    };

    createNodes() {
        for (let i = 0; i < this.width; i++)
           this.state.data.push(i);
        return this.state.data.map(i => <Cell id={("" + this.id + " " + i + "")} key={("" + this.id + " " + i + "")}/>)
    }

    render () {
        return (
            <div className="row">
                {this.createNodes()}
            </div>
        );
    }
}

export default Row;