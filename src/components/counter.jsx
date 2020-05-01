import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              Increment
            </button>
          </div>
          <div className="col-sm">
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              Decrement
            </button>
          </div>
          <div className="col-sm">
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

//Truesy and Falsy in conditional rendering
