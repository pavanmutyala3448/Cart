import React, { Component } from "react";
import Counter from "./counter";
import "./styles.css";
export default class Counters extends Component {
  render() {
    const { onReset, onDec, onDel, onInc, counter } = this.props;

    if (counter.length === 0) return <p>No More Counters present</p>;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-success sm-2">
          Reset
        </button>
        <br />
        {counter.map((item) => {
          return (
            <Counter
              key={item.id}
              onDelete={onDel}
              counter={item}
              onIncrement={onInc}
              onDecrement={onDec}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
