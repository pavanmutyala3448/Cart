import React, { Component } from "react";
export default class Counter extends Component {
  formatChange() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeChange() {
    let classes = "badge  m-3 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  // handleIncrement = () => {
  //   this.setState({ value: this.props.counter.value + 1 });
  // };
  // handleDecrement = () => {
  //   this.setState({ value: this.props.counter.value - 1 });
  // };
  render() {
    return (
      <React.Fragment>
        <h1 className={this.getBadgeChange()}>{this.formatChange()}</h1>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-warning m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }
}
