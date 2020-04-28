import React, { Component } from "react";
import Counter from "./counter";

class counter extends Component {
  state = {
    counter: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    console.log("Increment Happening");
  };

  handleReset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleDelete = (counterID) => {
    const counter = this.state.counter.filter((c) => c.id !== counterID);
    this.setState({ counter: counter });
  };

  render() {
    return (
      <div>
        <button
          className="btn-primary btn-small m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counter.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
            selected
          ></Counter>
        ))}
      </div>
    );
  }
}

export default counter;
