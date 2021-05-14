import React, { Component } from "react";
import Counters from "./counters";
import Navbar from "./navbar";
import "./styles.css";
export default class App extends Component {
  state = {
    counter: [
      {
        id: 1,
        value: 4
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      },
      {
        id: 4,
        value: 0
      }
    ]
  };
  handleIncrement = (counter) => {
    let counters = [...this.state.counter];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counter: counters });
  };
  handleDecrement = (counter) => {
    let counters = [...this.state.counter];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counter: counters });
  };
  handleDelete = (deletedId) => {
    let counter = this.state.counter.filter((c) => c.id !== deletedId);
    return this.setState({ counter });
  };
  handleReset = () => {
    const counter = this.state.counter.map((c) => {
      c.value = 0;
      return c;
    });
    return this.setState({ counter });
  };

  render() {
    return (
      <>
        <Navbar total={this.state.counter.filter((c) => c.value > 0).length} />
        <div class="container">
          <Counters
            counter={this.state.counter}
            onReset={this.handleReset}
            onInc={this.handleIncrement}
            onDec={this.handleDecrement}
            onDel={this.handleDelete}
          />
        </div>
      </>
    );
  }
}
