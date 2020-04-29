import React, { Component } from "react";
import Counter from "./counter";

class counter extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counter });
  };

  handleDelete = (counterID) => {
    const counter = this.state.counters.filter((c) => c.id !== counterID);
    this.setState({ counters: counter });
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
        {this.state.counters.map((counter) => (
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
