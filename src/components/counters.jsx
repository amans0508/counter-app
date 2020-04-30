import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement, counter } = this.props;
    return (
      <div>
        <button className="btn-primary btn-small m-2" onClick={onReset}>
          Reset
        </button>
        {counter.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            selected
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
