import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    Counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const Counters = this.state.Counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ Counters });
  };

  handleDelete = (counterID) => {
    const Counters = this.state.Counters.filter((c) => c.id !== counterID);
    this.setState({ Counters: Counters });
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
        {this.state.Counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            selected
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
