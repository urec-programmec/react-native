import React from "react";
import Cell from "./Cell";
import FlipMove from 'react-flip-move';

class Row extends React.Component {

    createNodes() {
        let data = [];
        let x = 0;
        if (this.props.data.length === 0){
            for (let i = 0; i < this.props.count; i++){
                x = Math.round(Math.random() * 100);
                while (data.includes(x))
                    x = Math.round(Math.random() * 100);
                data.push(x);
            }
        }
        else if (this.props.data.length < this.props.count){
            for (let i = 0; i < this.props.data.length; i++)
                data.push(this.props.data[i]);

            for (let i = this.props.data.length; i < this.props.count; i++){
                x = Math.round(Math.random() * 100);
                while (data.includes(x))
                    x = Math.round(Math.random() * 100);
                data.push(x);
            }
        }
        else{
            for (let i = 0; i < this.props.count; i++)
                data.push(this.props.data[i]);
        }
        this.props.setData(data);
        return data.map(i => <Cell id={i + ""} key={i + ""}/>)
    }

    render () {
        const rows = this.createNodes();
        return (
            
            <FlipMove className="row">
                {rows}
            </FlipMove>
        );
    }
}

export default Row;