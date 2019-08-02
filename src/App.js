import React, { Component } from "react";
// import logo from "./logo.svg";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Adder from "./components/adder"

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : (counters[index].value += 0);
    this.setState({ counters: counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const idList = counters.map(o => o.id);
    const max = Math.max.apply(null, idList);
    const newId = max + 1;
    counters.push({ id: newId, value: 0 });
    this.setState({ counters: counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCount={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          <Adder onAdd={this.handleAdd} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
