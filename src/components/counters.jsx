import React, { Component } from "react";
import Counter from "./counter";

class counter extends Component {
  render() {
    return (
      <div>
        <button
          className="btn-primary btn-small m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.Counter.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
            selected
          ></Counter>
        ))}
      </div>
    );
  }
}

export default counter;
