import React from "react";

export default class Counter extends React.Component {
    state = {
        value: 0
    };
    render() {
        return(
        <div>
            <h1>{this.state.value}</h1>
            <p>
                Nilai = {this.state.value}
            </p>
            <button onClick={() => {
                this.setState( {value:this.state.value + 1 }); }
            }>Increment</button>
        </div>)
    }
}