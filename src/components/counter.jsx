import React, { Component } from "react";
import { relative } from "path";

const number = {
  display: 'inline-block',
  width: 55
}

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3", 4]
  // };

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()} style={number}>{this.formatCount()}</span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            <span>&#43;</span>
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            <span>&#8722;</span>
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
          {/* {this.state.tags.length === 0 && "Please add tags!"} */}
          {/* {this.renderTags()} */}
        </div>
      </React.Fragment>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   use arrow function like below to bind event handlers to this class's this

  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No Tags!</p>;

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

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
