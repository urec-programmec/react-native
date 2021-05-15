import React from "react";
import Buttons from "./Buttons";

class Panel extends React.Component {

    count = 10;

    setCount = (e) => {
        e.preventDefault();
        let cnt = e.target.elements.count.value
        if(parseInt(cnt) && parseInt(cnt) >= 5 && parseInt(cnt) <= 20){
            this.count = parseInt(cnt);
            this.props.setCount(this.count);
        }
    }

    render () {
        return (
            <div className="panel">
                <form onSubmit={this.setCount}>
                    <input type="text" className="input" name="count"></input>
                    <button id="bset" className="button">Set count</button>
                </form>
                <Buttons shuffle={this.props.shuffle} sort={this.props.sort}></Buttons>
            </div>
        );
    }
}

export default Panel;