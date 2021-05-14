import React from "react";
import Row from "./Row";  

class Container extends React.Component{

    state = {
        data: []
    };

    createNodes() {
        for (let i = 0; i < this.props.height; i++)
           this.state.data.push(i);
        return this.state.data.map((i) => <Row width={this.props.width} id={i} key={i}/>)
    }

    render(){
        return (
            <div className="container">
                 {this.createNodes()}
            </div>
        );
    }
}

export default Container;