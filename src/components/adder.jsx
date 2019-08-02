import React, { Component } from "react";

class adder extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          onClick={this.props.onAdd}
          className="btn btn-sm btn-primary m-2"
        >
          Add Item
        </button>
      </div>
    );
  }
}

export default adder;
